import axios from 'axios'
import React from 'react'
import { UpdUser } from './Update/UpdUser'

export const CardUsers = ({ _id, title, surname, phone, email }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const elimUser = async (_id) => {
    try {
      const { data } = await axios.delete(`http://localhost:3200/user/delete/${_id}`, { headers: headers })
      alert(data.message)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {/* para el update */}
      {/* <UpdUser></UpdUser> */}
      <div className="card m-3 g-0" style={{ maxWidth: '18rem', maxHeight: '20rem' }}>
        <div className="card-body">
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{surname}</p>
          <p className='card-text'>{phone}</p>
          <p className='card-text'>{email}</p>
          <button className='btn btn-warning'>Editar</button>
          <button onClick={() => elimUser(_id)} className='btn btn-danger'>Eliminar</button>
        </div>
      </div>
    </>
  )
}