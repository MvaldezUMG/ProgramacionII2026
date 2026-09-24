import { Image } from 'expo-image';
import { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';

import { Card } from '@/components/card';

export default function HomeScreen() {
  
  const [contador, setContador] = useState(0);

  function buttonClick(e: any){
    if (Platform.OS === "web"){
      window.alert("Hola")
    }else{
      Alert.alert('Hola');
    }
  }
  function incrementar(e: any){
    setContador(anterior => anterior + 1)
  }
  
  return (
    <ParallaxScrollView
      
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
     <Button title='Haz click aca' onPress={buttonClick} ></Button>
     <Button title='Aumentar' onPress={incrementar} ></Button>
     <ThemedText>Conteo actual: {contador}</ThemedText>
    
      <View style={{
        width: "80%",            // ancho
        height: 250,           // alto
        padding: 4,           // espacio INTERNO
        margin: 4,             // espacio EXTERNO
        backgroundColor: "red", // color de fondo para verla
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{color:"white"}}>Soy una caja</Text>
        <Text style={{color:"white"}}>Soy una caja2</Text>
        <Text style={{color:"white"}}>Soy una caja3</Text>
        <Text style={{color:"white"}}>Soy una caja4</Text>
        <Text style={{color:"white"}}>Soy una caja5</Text>
        <Text style={{color:"white"}} >Soy una caja6</Text>
      </View>

      <Card contenido="Hola"></Card>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
