import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './src/navigator/StackNavigator'
// import { DrawerMenuLateralBasico } from './src/navigator/DrawerMenuLateralBasico'
import { DrawerMenuLateral } from './src/navigator/DrawerMenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerMenuLateral />
    </NavigationContainer>
  )
}

export default App