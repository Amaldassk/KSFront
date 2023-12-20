import React, { Suspense, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import PrivateRoutes from './PrivateRoutes'
import { privateRoutes, publicRoutes } from './routes'
import FallbackLoading from './components/loader/FallbackLoading'
import SignUp from './pages/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './redux/slice/authSlice'

const AppRouter = () => {

  const userData = useSelector(state=>state.auth?.userData);

  return (
    <Suspense fallback={<FallbackLoading/>}>
      <Routes>
        <Route element={<PrivateRoutes userData={userData}/>}>
          {privateRoutes.map((route)=>{
             return <Route key={route.path} path={route.path} element={route.element}/>
          })}
        </Route>

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Suspense>
  )
}

export default AppRouter