import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import { Tabs } from './BottomTabsNavigator'
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { UserScreen } from '../screens/UserScreen'

const Drawer = createDrawerNavigator()

export const DrawerMenuLateral = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front' // Menú permanente en modo horizontal
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="UserScreen" component={UserScreen} />
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/* Contenedor del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones del menú */}
      <View style={styles.menuContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={{ ...styles.menuBtn, flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon name={'basketball-outline'} size={20} color={'blue'} />
          <Text style={styles.menuText}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={{ ...styles.menuBtn, flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon name={'cog-outline'} size={20} color={'blue'} />
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={styles.menuBtn}>
          <Text style={styles.menuText}>Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('UserScreen')} style={styles.menuBtn}>
          <Text style={styles.menuText}>UserScreen</Text>
        </TouchableOpacity>


      </View>

    </DrawerContentScrollView>
  )
}