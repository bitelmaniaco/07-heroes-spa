// import { useState } from 'react';

// export const useForm = ( initialForm = {} ) => {
  
//     const [ formState, setFormState ] = useState( initialForm );

//     const onInputChange = ({ target }) => {
//         const { name, value } = target;
//         setFormState({
//             ...formState,
//             [ name ]: value
//         });
//     }

//     const onResetForm = () => {
//         setFormState( initialForm );
//     }

//     return {
//         ...formState,
//         formState,
//         onInputChange,
//         onResetForm,
//     }
// }

import { useState } from "react";


//recibe un objeto
//lo guarda

export const useForm = (estadoInicial = {} ) => {
    //onst nombre = 'useForm.js ';


    const [valores, setValor] = useState(estadoInicial);

    const reseteo = () => {
        setValor( estadoInicial );
    }

    const anteCambios = ({ target }) => { //debe ser SIEMPRE target
        const { name, value } = target;
        setValor({
            ...valores, // desestructuramos objeto
            //nombre asignado a value, abajo // valor
            // [ target.name ]: target.value 
            [name]: value
        });
    }

    return { 
        ...valores, 
        valores, 
        anteCambios, 
        reseteo, 
    }
}