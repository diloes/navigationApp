import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Text, View } from 'react-native'
import { styles, colors } from '../theme/appTheme';


export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen')
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab1Screen</Text>

      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="american-football-outline" size={80} color={colors.primary} />
        <Icon name="camera-outline" size={80} color={colors.primary} />
        <Icon name="images-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  )
}
