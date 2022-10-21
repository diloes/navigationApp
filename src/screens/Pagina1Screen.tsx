import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>

      <Button title='Ir página 2' onPress={() => navigation.navigate('Pagina2Screen')} />

      <Button title='Ir persona' onPress={() => navigation.navigate('PersonaScreen')} />
    </View>
  )
}

/**
 * NOTAS:
 * - interface Props extends StackScreenProps<any, any> { } -> Este método de navegación hacia otro componente
 * es recibido por props como podemos ver. Hay otro método que lo utilizo en Pagina2Screen que hace lo mismo
 * pero sin props, utilizando un hook. Al utilizar el hook estamos metiendo más carga a nuestra app. 
 */