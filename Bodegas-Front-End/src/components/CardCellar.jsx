import axios from 'axios'
import React from 'react'

export const CardCellar = ({ _id, title, description, location }) => {

  const elimCellar = async (_id) => {
    try {
      const { data } = await axios.delete(`http://localhost:3200/cellar/delete/${_id}`)
      alert(data.message)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="card m-3 g-0" style={{ maxWidth: '18rem', maxHeight: '20rem' }}>
        <div className="card-body">
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>{location}</p>
          <button className='btn btn-warning'>Editar</button>
          <button onClick={() => elimCellar(_id)} className='btn btn-danger'>Eliminar</button>
        </div>
      </div>
    </>
  )
}