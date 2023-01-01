
import React from 'react'
import RootStack from './src/navigation/RootStack'
import loading from './src/assets/json/97952-loading-animation-blue.json'
import { Provider as PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <PaperProvider>
      <RootStack />
    </PaperProvider>
  )
}

export default App