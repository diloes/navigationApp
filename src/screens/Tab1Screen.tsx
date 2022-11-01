import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Text, View } from 'react-native'
import { styles, colors } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab1Screen</Text>

      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="camera-outline" />
        <TouchableIcon iconName="images-outline" />
      </Text>
    </View>
  )
}
