import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Platform, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { Tab1Screen } from '../screens/Tab1Screen'
import { Tab2Screen } from '../screens/Tab2Screen'

import { StackNavigator } from './StackNavigator'
import { colors } from '../theme/appTheme'
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

{ /* Tabs para Android */ }
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {

  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        borderColor: colors.primary
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = ''

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break

            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break

            case 'StackNavigator':
              iconName = 'bookmarks-outline'
              break
          }

          return <Icon name={iconName} size={20} color={'yellow'} />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

{ /* Tabs para iOS */ }
const BottomTabIOS = createBottomTabNavigator()

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        borderColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused, size }) => {

          let iconName: string = ''

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break

            case 'Tab2Screen':
              iconName = 'T2'
              break

            case 'StackNavigator':
              iconName = 'St'
              break
          }

          return <Text style={{ color: color }} >{iconName}</Text>
        }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}