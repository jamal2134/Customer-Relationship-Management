import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import WelcomeScreen from './screens/Welcome'
import New from './screens/customers/New'
import List from './screens/customers/List'
import Regions from './screens/customers/Regions'
import Edit from './screens/customers/Edit'
import Clear from './screens/customers/Clear'
import CustomerOfTheDay from './screens/customers/CustomerOfTheDay'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='Add Customer'
                    component={New}
                />
                <Stack.Screen
                    name='Edit Customer'
                    component={Edit}
                />
                <Stack.Screen
                    name='List Customers'
                    component={List}
                />
                <Stack.Screen
                    name='Regions'
                    component={Regions}
                />
                <Stack.Screen
                    name='Clear Page'
                    component={Clear}
                />

                <Stack.Screen
                    name='Customer Of The Day'
                    component={CustomerOfTheDay}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation