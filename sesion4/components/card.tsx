import { Text, View } from "react-native";

type CardProps ={
  contenido: string
}

export function Card(props: CardProps) {
  return (
    <View style={{
      flex: 1,                    // ocupa toda la pantalla
      justifyContent: "center",   // centra VERTICALMENTE
      alignItems: "center",       // centra HORIZONTALMENTE
      backgroundColor: "#f4f4f4"
    }}>
      <View style={{
        padding: 20,
        backgroundColor: "white",
        borderRadius: 8           // esquinas redondeadas
      }}>
        <Text style={{ fontSize: 18 }}>{props.contenido}</Text>
      </View>
    </View>
  );
}