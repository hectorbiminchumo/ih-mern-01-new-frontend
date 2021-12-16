// ./client/src/Router.js

// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'
import Guitars from './components/Guitars'
import Single from './components/Guitars/Single'
import CreateGuitar from './components/Guitars/Create'

import Stores from './components/Stores'
import CreateStore from './components/Stores/CreateStore'
import SingleStore from './components/Stores/SingleStore'
import EditStore from './components/Stores/SingleStore/EditStore'





import GuitarState from './context/Guitar/GuitarState'
import UserState from './context/User/UserState'
import StoreState from './context/Store/StoreState'

// import Public from './routes/Public'

import EditGuitar from './components/Guitars/Single/Edit'

import Auth from './routes/Auth'
import Profile from './components/User/Profile'
import Private from './routes/Private'

// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
		<UserState>
			<GuitarState>
				<StoreState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* localhost:3000/ */}
							<Route index element={<Home />} />
							{/* localhost:3000/registro */}
							<Route path="registro" element={<Auth component={Register} />} />
							{/* localhost:3000/iniciar-sesion */}
							
							<Route path="iniciar-sesion" element={<Auth component={Login} />} />
							{/* localhost:3000/guitarras */}
							{/* <Route path="guitarras" element={<Public component={Guitars} />} /> */}
							<Route path="guitarras" element={<Guitars />} />

							{/* localhost:3000/guitarras/crear */}
							<Route path="guitarras/crear" element={<CreateGuitar />} />
							{/* localhost:3000/guitarras/:id */}
							<Route path="guitarras/:id" element={<Single />} />

							{/* localhost:3000/guitarras/:id/editar */}
							<Route path="guitarras/:id/editar" element={<EditGuitar />} />



							{/* <Route path="stores" element={<Public component={Stores} />} /> */}
							<Route path="stores" element={<Stores />} />

							{/* localhost:3000/stores/crear */}
							<Route path="stores/crear" element={<CreateStore />} />
							{/* localhost:3000/stores/:id */}
							<Route path="stores/:id" element={<SingleStore />} />

							{/* localhost:3000/stores/:id/editar */}
							<Route path="stores/:id/editar" element={<EditStore />} />


							{/* localhost:3000/profile */}
							<Route path="profile" element={<Private component={Profile} />} />


						</Route>
					</Routes>
				</BrowserRouter>
				</StoreState>
			</GuitarState>
		</UserState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router