import React, { useState, useEffect } from 'react'
import { CardUsers } from '../components/CardUser'
import axios from 'axios'
import { AddUser } from '../components/Add/AddUser'

export const UserPage = () => {
  const [users, setUsers] = useState([{}])
  /*  const headers = {
     'Content-Type': 'application/json',
     'Authorization': localStorage.getItem('token')
   } */

  const getUsers = async () => {
    try {
      const { data } = await axios('http://localhost:3200/user/getUsers')
      if (data.users) {
        setUsers(data.users)
        console.log(data.users)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.response.message || 'Error getting users')
    }
  }


  useEffect(() => getUsers, [])

  return (
    <>
    <AddUser></AddUser>
      <main>
        <div className="left binding color">
          <i className="fa-regular fa-user"></i>
          | CONTROL USERS
        </div>
        <div className='row g-0 justify-content-center'>
          {
            users.map(({ _id, name, surname, phone, email }, i) => {
              return (
                <CardUsers
                  key={i}
                  _id={_id}
                  title={name}
                  surname={surname}
                  phone={phone}
                  email={email}
                ></CardUsers>
              )
            })
          }
        </div>

        {/* Boton para agregar*/}
        <div>
          <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" >Agregar</button>
        </div>
      </main>
    </>
  )
}

