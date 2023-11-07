import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { colors } from '../theme/appTheme';

//Parámetros base que cada página va a poder recibir
export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {
    id: number,
    nombre: string
  }
}

//stack base que va a ser de tipo RootStackParams
const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Pagina1Screen'      
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        contentStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{ title: 'Página 1' }} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{ title: 'Página 2' }} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{ title: 'Página 3' }} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator >
  );
}