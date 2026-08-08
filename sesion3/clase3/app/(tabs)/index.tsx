import { useState } from 'react';
import {
  Alert,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';



function Saludar(nombre: string, apellido: string){
  let message: string = "Hola como estas?" + " " + nombre + " " + apellido;
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

function Saludo(props: {nombre: string, apellido: string}){
 return (
  <Button title="Has click aca" onPress={()=>Saludar(props.nombre, props.apellido)} ></Button>
 )  
}

export default function HomeScreen() {

  const [nombre, setNombre] = useState("")

  return (
   <ScrollView>
    <Saludo nombre={nombre} apellido=''/>

      <Text>Hola {nombre}</Text>

      <TextInput style={{backgroundColor:"white", width:"50%"}} placeholder="Ingrese su nombre"
                 value={nombre}
                 onChangeText={(text: string)=> setNombre(text) }
      ></TextInput>

    </ScrollView>
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
    height: 300,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
