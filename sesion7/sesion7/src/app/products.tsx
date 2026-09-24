import { ThemedText } from '@/components/themed-text';
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../database/supabase';

export default function ProductsScreen() {

    const [products, setProducts] = useState([]);

    const cargarProducts = async ()=>{
        try{
            const { data: productsData, error } = await supabase.from('products').select();

            if (error){
                Alert.alert("Ha ocurrido un error", error.message);
            }
            if (productsData && productsData?.length > 0){
                setProducts(productsData)
            }

        }catch(err){
            Alert.alert("Ha ocurrido un error", err.message)
        }
    }

    useEffect(()=>{
        //Esto se va cargar al iniciar la pantalla
        (async()=>{
            await cargarProducts();
        })()
    },[])

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.heroSection}>
                <ThemedText>
                    Products list
                </ThemedText>
                <ThemedView>
                    <FlatList data={products} 
                            renderItem={({item})=>
                            <View style={{flexDirection: 'column'}}>
                                <ThemedText>{item.nombre} - {item.proveedor} - Q{item.precio} - Stock:{item.stock}</ThemedText>
                                <Button title="Editar" onPress={()=> {}}></Button>
                            </View>
                            }>
                               
                    </FlatList>
                </ThemedView>
                
            </ThemedView>
            </SafeAreaView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
