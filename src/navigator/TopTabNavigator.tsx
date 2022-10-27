import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import { ChatScreen } from '../screens/ChatScreen'
import { ContactsScreen } from '../screens/ContactsScreen'
import { AlbumScreen } from '../screens/AlbumScreen'

// Ignorar warging que nos manda la app(mala práctica)
import { LogBox, Text } from 'react-native'
import { colors } from '../theme/appTheme';
LogBox.ignoreLogs(['Sending'])

const Tab = createMaterialTopTabNavigator()

export const TopTabNavigator = () => {

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true, // para que se vean los iconos
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary
        },
        tabBarStyle: {
          //borderBottomWidth: 0,
          shadowColor: 'transparent',
          elevation: 0
        },
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = ''

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline'
              break

            case 'ContactsScreen':
              iconName = 'people-outline'
              break

            case 'AlbumScreen':
              iconName = 'albums-outline'
              break
          }

          return <Icon name={iconName} size={20} color={colors.primary} />
        }
      })}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  )
}