import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {

  return (
    <NavigationContainer>
      <CustomNavigation />
      {/* <FadeScreen />  */}
    </NavigationContainer>
  );
}

export default App;
