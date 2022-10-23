import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const image = { uri: "https://reactjs.org/logo-og.png" }

export const SettingsScreen = () => {

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.texto}>
          Esto es una página de ajustes que no ajusta nada.
          Ya que esta app es para ver los diferentes tipos de navegación
          que podemos usar en React Native.
        </Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  texto: {
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    color: 'lightblue',
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
  }
});