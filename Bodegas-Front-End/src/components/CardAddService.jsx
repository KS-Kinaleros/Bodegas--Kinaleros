import axios from 'axios'
import React from 'react'
import { UpdService } from './Update/UpdService'

export const CardAddService = ({ _id, title, description }) => {

  const elimService = async (_id) => {
    try {
      const { data } = await axios.delete(`http://localhost:3200/service/delete/${_id}`)
      alert(data.message)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {/* Para el update */}
      {/* <UpdService></UpdService> */}

      <div className="card m-3 g-0" style={{ maxWidth: '18rem', maxHeight: '20rem' }}>
        <div className="card-body">
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <button className='btn btn-warning'>Editar</button>
          <button onClick={() => elimService(_id)} className='btn btn-danger'>Eliminar</button>
        </div>
      </div>
    </>
  )
}