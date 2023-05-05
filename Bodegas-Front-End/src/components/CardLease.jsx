import axios from 'axios'
import React from 'react'
import { UpdLease } from './Update/UpdLease'


export const CardLease = ({ _id, title, client, worker, total }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const elimLease = async (_id) => {
    try {
      const { data } = await axios.delete(`http://localhost:3200/lease/delete/${_id}`, { headers: headers })
      alert(data.message)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {/* para el update */}
      <UpdLease _id={_id}></UpdLease>
      <div className="card m-3 g-0" style={{ maxWidth: '18rem', maxHeight: '20rem' }}>
        <div className="card-body">
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{client}</p>
          <p className='card-text'>{worker}</p>
          <p className='card-text'>{total}</p>
          <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#myLease">Editar</button>
          <button onClick={() => elimLease(_id)} className='btn btn-danger'>Eliminar</button>
        </div>
      </div>
    </>
  )
}