import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import CustomersList from '../../../features/customer/components/CustomersList'



// top level display component only - declares a view that will be part of navigation
const NewScreen = ({ route }) => {
  const { region } = route.params;

  return (
    <SafeAreaView>
      <CustomersList region={region} />
    </SafeAreaView>
  )

}

export default NewScreen
