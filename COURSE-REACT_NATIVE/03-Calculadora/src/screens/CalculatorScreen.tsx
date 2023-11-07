import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { UseCalculator } from '../hooks/UseCalculator';

export const CalculatorScreen = () => {
    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular

    } = UseCalculator();  

    return (
        <View style={styles.calculatorContainer}>
            {
                (numeroAnterior !== '0') && (<Text style={styles.smallResult}> {numeroAnterior} </Text>)
            }

            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit> {numero} </Text>
            {/* fila de botones */}
            <View style={styles.row}>
                {/* boton */}
                <ButtonCalc text="C" color="#9B9B9B" accion={limpiar} />
                <ButtonCalc text="+/-" color="#9B9B9B" accion={positivoNegativo} />
                <ButtonCalc text="del" color="#9B9B9B" accion={btnDelete} />
                <ButtonCalc text="/" color="#FF9427" accion={btnDividir} />
            </View>

            {/* fila de botones */}
            <View style={styles.row}>
                <ButtonCalc text="7" accion={armarNumero} />
                <ButtonCalc text="8" accion={armarNumero} />
                <ButtonCalc text="9" accion={armarNumero} />
                <ButtonCalc text="x" color="#FF9427" accion={btnMultiplicar} />
            </View>

            {/* fila de botones */}
            <View style={styles.row}>
                <ButtonCalc text="4" accion={armarNumero} />
                <ButtonCalc text="5" accion={armarNumero} />
                <ButtonCalc text="6" accion={armarNumero} />
                <ButtonCalc text="-" color="#FF9427" accion={btnRestar} />
            </View>

            {/* fila de botones */}
            <View style={styles.row}>
                <ButtonCalc text="1" accion={armarNumero} />
                <ButtonCalc text="2" accion={armarNumero} />
                <ButtonCalc text="3" accion={armarNumero} />
                <ButtonCalc text="+" color="#FF9427" accion={btnSumar} />
            </View>

            {/* fila de botones */}
            <View style={styles.row}>
                <ButtonCalc text="0" accion={armarNumero} ancho />
                <ButtonCalc text="." accion={armarNumero} />
                <ButtonCalc text="=" color="#FF9427" accion={calcular} />
            </View>

        </View>
    )
}
