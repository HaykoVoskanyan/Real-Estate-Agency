import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layouts from './Components/Layouts/Layouts'
import About from './Pages/About/About'
import Drops from './Pages/Drops/Drops'
import Legal from './Pages/Legal/Legal'
import Connect from './Pages/Contact/Connect'
import Main from './Components/Main/Main'



export default function App() {
  const router = 
  createBrowserRouter(
    createRoutesFromElements(
      <>
    <Route path="/" element={<Layouts />}>
      <Route index element={<Main/>}></Route>
      <Route element={<About />} path="about"></Route>
      <Route element={<Connect />} path="connect"></Route>
      <Route element={<Drops />} path="drops" ></Route>
      <Route element={<Legal />} path="legal" ></Route>
    </Route>
    </>
    )
  )
  return (
    <RouterProvider router={router}>
      <div>
      </div>
      </RouterProvider>
  )
}


