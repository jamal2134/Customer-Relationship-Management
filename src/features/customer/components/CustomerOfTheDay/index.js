
import React, { useEffect, useState } from 'react'
import { Keyboard, TextInput, View, Button, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import Notificationstyles from './styles'
import { useListCustomers } from '../../hooks'


const onSubmit = (seconds, customer) => {
  console.log(seconds, customer)
  Keyboard.dismiss()
  const schedulingOptions = {
    content: {
      title: `Your Customer of the day is ${customer}`,
      body: 'Open the app to read more about your Customer of the day!',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue'
    },
    trigger: {
      seconds: seconds,
    },
  }
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  )
}

const handleNotification = () => {
  console.warn('Your notification ran, but won`t show up in the app!')
}

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync()
  if (Constants.isDevice && status === 'granted')
    console.log('Notification permissions granted.')
}



const CustomerOfTheDay = () => {
  const styles = StyleSheet.create(Notificationstyles())
  const customers = useListCustomers();
  const [customer, setCustomer] = useState()

  useEffect(() => {
    
    if (customers && customers.length > 0) {
      const customer = customers[Math.floor(Math.random() * customers.length)]
      setCustomer(customer.first_name + " " + customer.last_name)
      console.log(customer.first_name + " " + customer.last_name)
    }

  }, [customers]);

  useEffect(() => {


    askNotification(); // ask for permission

    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Press the button to get your very own Customer of the day!
      </Text>
      <Button onPress={()=>onSubmit(5, customer)} title="Schedule" />
    </View>
  );
};



export default CustomerOfTheDay;


