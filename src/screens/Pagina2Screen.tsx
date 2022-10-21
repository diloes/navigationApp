import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {

  const navigator = useNavigation()

  useEffect(() => {
    // Estos cambios que son de este componente concreto pisan a las globales de StackNavigator
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atrás'
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2 Screen</Text>

      <Button title='Ir página 3' onPress={() => navigator.navigate('Pagina3Screen' as never)} />
    </View>
  )
}
