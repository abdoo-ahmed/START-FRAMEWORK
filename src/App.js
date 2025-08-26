import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound/NotFound'
import Gallary from './Gallary'
import Contant from './Contant'
import Layout from './Layout/Layout'

export default function App() {
  var x= createBrowserRouter([
    { path:"/", element:<Layout/>, children:[
      { path:"StartFramework", element:<Home/>},
      { path:"home", element:<Home/>},
      { path:"", element:<Home/>},
      { path:"about", element:<About/>},
      { path:"PORTFOLIO", element:<Gallary/>},
      { path:"Contact", element:<Contant/>},
      { path:"*", element:<NotFound/>},
    ]
  },
])
  
  return <>
   <RouterProvider router={x}/>
   </>
}
