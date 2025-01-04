import React from 'react'
import { routes } from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const View = () => {
    const router = createBrowserRouter(routes);

  return (
     <RouterProvider router={router}/>
  )
}

export default View