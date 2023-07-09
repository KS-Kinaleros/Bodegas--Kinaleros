import React, { useState, createContext, useEffect } from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { UserPage } from './pages/UserPage'
import { CellarPage } from './pages/CellarPage'
import { LeasePage } from './pages/LeasePage'
import { AddServicePage } from './pages/AddServicePage'



export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
      name: '',
      username: '',
      role: ''
    })

    useEffect(()=> {
      let token = localStorage.getItem('token')
      if(token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                },
                {
                    path: '/login',
                    element: <LoginPage/>
                },
                {
                    path: '/dashboard',
                    element: loggedIn ? <DashboardPage/> : <LoginPage/>,
                    children: [
                        {
                            path: 'users',
                            element: <UserPage/>,
                        },
                        { 
                            path: 'cellars',
                            element: <CellarPage/>,
                        },
                        {
                            path: 'leases',
                            element: <LeasePage/>
                        },
                        {
                            path: 'additionalServices',
                            element: <AddServicePage/>
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )
}
