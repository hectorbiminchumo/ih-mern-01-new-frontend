import { useReducer } from "react";
import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'

const StoreState = (props) => {

// 1. INITIAL STATE 
    const initialState = {
        stores: [],
        hola: "mundo"

    }

 // 2. CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
 const [globalState, dispatch] = useReducer(StoreReducer, initialState)
 
 //3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
 const changeText = () => {

    dispatch({ // ESTE OBJETO SE LE CONOCE COMO ACTION
        type: "CHANGE_TEXT",
        payload: "Estoy aprendiendo Context sin morir2." 		
    })

}


 //4. RETORNO
 return(
    <StoreContext.Provider
        value={{
            stores: globalState.stores,
            hola: globalState.hola,
            changeText
        }}>
            {props.children}

            </StoreContext.Provider>

 )



}

export default StoreState