import React from 'react'
import { ScrollView, SafeAreaView,StyleSheet  } from 'react-native'
import New from '../../../features/customer/components/New'



// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <New />
    </ScrollView>

  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1, // make SafeAreaView take full screen
  },
  scrollContent: {
    flexGrow: 1, // allow scrolling when content is taller than screen
    padding: 16, // optional spacing
  },
});

export default NewScreen
