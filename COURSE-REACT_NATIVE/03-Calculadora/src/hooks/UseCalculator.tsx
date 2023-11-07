import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const UseCalculator = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>()


    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const btnDelete = () => {
        let negativo = '';
        let numTemporal = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numTemporal = numero.substring(1);
        }

        if (numTemporal.length > 1) {
            setNumero(negativo + numTemporal.slice(0, -1));
        } else {
            setNumero('0');
        }
    }

    const cambiarNumAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }

        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
        }

        setNumeroAnterior('0');

    }

    const armarNumero = (numeroString: string) => {
        //No aceptar doble punto 
        if (numero.includes('.') && numeroString === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //Punto decimal
            if (numeroString === '.') {
                setNumero(numero + numeroString);

                //Evaluar si es otro cero, y hay un punto
            } else if (numeroString === '0' && numero.includes('.')) {
                setNumero(numero + numeroString);

                //Si es diferente de cero y no tiene un punto
            } else if (numeroString !== '0' && !numero.includes('.')) {
                setNumero(numeroString);

                //Evitar 0000.0
            } else if (numeroString === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroString)
            }

        } else {
            setNumero(numero + numeroString);
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    return {
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
        calcular,
    }
}
