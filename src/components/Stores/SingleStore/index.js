import React, { useContext } from 'react'
import StoreContext from '../../../context/Store/StoreContext'


import {useParams} from 'react-router-dom'

export function SingleStore() {

    const ctx = useContext(StoreContext)
    const { singleStore, getStore} = ctx

    const params = useParams()
    const id = params.id

    return (
        <div>
        Pagina individual de Store

        <button onClick={()=> { getStore(id)}}>
            Obtener Store individual
        </button>

        <h1>{singleStore.domicilio}</h1>
        <h1>{singleStore.telefono}</h1>


        </div>
    )
}


