import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import CustomerOfTheDay from '../../../features/customer/components/CustomerOfTheDay'

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
    <SafeAreaView>
        <CustomerOfTheDay />
    </SafeAreaView>
)

export default NewScreen
