import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import RegionList from '../../../features/customer/components/RegionList'



// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <RegionList />
  </SafeAreaView>
)

export default NewScreen
