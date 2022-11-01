import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './src/navigator/StackNavigator'
// import { DrawerMenuLateralBasico } from './src/navigator/DrawerMenuLateralBasico'
import { DrawerMenuLateral } from './src/navigator/DrawerMenuLateral'
import { AuthProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerMenuLateral />
      </AppState>
    </NavigationContainer>
  )
}

// Si tuvieramos más de un provider los meteriamos todos aquí
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App