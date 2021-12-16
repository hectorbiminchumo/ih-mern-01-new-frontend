import React, { useContext, useEffect } from 'react'
import StoreContext from '../../../context/Store/StoreContext'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function SingleStore() {

    const ctx = useContext(StoreContext)
    const { getStore, singleStore} = ctx

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getStore(id)
    }, [])

    return(
        <>
        <div>

<div class="mt-4 flex md:mt-0">
                <Link to={`/stores/${id}/editar`}>
                    <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Editar Store
                    </button>
                </Link>
            </div>

    <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:max-w-lg lg:self-end">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-2">
                        <li>
                            <div className="flex items-center text-sm">
                                <Link to="/stores" className="font-medium text-gray-500 hover:text-gray-900">
                                    Stores
                                </Link>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300">
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center text-sm">
                                <Link to="/stores" className="font-medium text-gray-500 hover:text-gray-900">
                                    Stores
                                </Link>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="mt-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleStore.domicilio}</h1>
                </div>
                <section aria-labelledby="information-heading" className="mt-4">
                    <h2 id="information-heading" className="sr-only">Product information</h2>
                    
                    <div className="mt-4 space-y-6">
                        <p className="text-base text-gray-500">{singleStore.telefono}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
                    </div>
                </section>
            </div>
            
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
                <section aria-labelledby="options-heading">
                    <h2 id="options-heading" className="sr-only">Product options</h2>
                </section>
            </div>
        </div>
    </div>
</div>


            



        </>
    )



}


