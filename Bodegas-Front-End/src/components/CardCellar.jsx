import React from 'react'

export const CardCellar = ({title, description, location,}) => {
  return (
    <>
      <div className="card m-3 g-0" style={{ maxWidth: '18rem', maxHeight: '20rem' }}>
        <div className="card-body">
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{ description}</p>
          <p className='card-text'>{location }</p>
          <a href='#' className='btn btn-primary'>More Info</a>
        </div>
      </div>
    </>
  )
}