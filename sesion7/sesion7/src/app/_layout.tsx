import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import { useEffect, useState } from 'react';
import { authRepo } from '.';
import { LoginScreen } from './login';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

    const [loggeado, setLoggeado] = useState(false)
  
    useEffect(()=>{
      //Se va cargar al inicio del programa
      (async()=>{
        const sesion = await authRepo.obtenerSesion();
        if (sesion){
          setLoggeado(true)
        }
      })()
    },[])
  

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      {!loggeado ? <LoginScreen/> : <AppTabs />}
      
    </ThemeProvider>
  );
}
