import React from 'react';
import { SafeAreaView } from 'react-native';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';


function App(){
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CounterScreen />  */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen />  */}
      {/* <PositionScreen />       */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;
