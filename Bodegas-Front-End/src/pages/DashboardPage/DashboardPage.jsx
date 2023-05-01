import React, { useState, useContext } from 'react'
import './DashboardStyle.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Index'
import { Outlet, Link } from 'react-router-dom'


export const DashboardPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const logOut = () => {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/login')
  }

  return (
    <>
      <div id='body'>
        <section id='sidebar'>
          <a className='brand ms-3'>
            <span className='text'>Bodegas - KS</span>
          </a>
          <ul className='side-menu top'>
            <li className='active'>
              <button>
                <span className='text'>Control Panel</span>
              </button>
            </li>
            <li>
              <Link to='cellars'>
                <button>
                  <span className='text'>CELLARS</span>
                </button>
              </Link>
            </li>
            {
              dataUser.role == 'ADMIN' ? (
                <li>
                  <Link to='users'>
                    <button>
                      <span className='text'>USERS</span>
                    </button>
                  </Link>
                </li>
              ) : <></>
            }
            <li>
              <Link to='leases'>
                <button>
                  <span className='text'>LEASES</span>
                </button>
              </Link>
            </li>

            <li>
              <Link to='additionalServices'>
                <button>
                  <span className='text'>ADDITIONAL SERVICES</span>
                </button>
              </Link>
            </li>
          </ul>
          <ul className='side-menu top'>
            <li>
              <button>
                <span className='text'>Welcome: {dataUser.username}, {dataUser.role}</span>
              </button>
            </li>
            <li>
              <button>
                <span className='text'>Settings</span>
              </button>
            </li>
            <li>
              <button onClick={logOut}>
                <span className='text'>LogOut</span>
              </button>
            </li>
          </ul>
        </section>


        <section id='content'>
          <nav>
            <a></a>
          </nav>
          <Outlet></Outlet>
        </section>


      </div>
    </>
  )
}
