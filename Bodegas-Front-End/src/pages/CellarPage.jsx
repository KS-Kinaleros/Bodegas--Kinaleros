import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardCellar } from '../components/CardCellar'

export const CellarPage = () => {
  const [cellars, setCellars] = useState([{}])
  const [form, setForm] = useState({
    name: ''
  })
  
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const getCellars = async () => {
    try {
      const { data } = await axios('http://localhost:3200/cellar/get')
      if (data.cellar) {
        setCellars(data.cellar)
        console.log(data.cellar)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.response.message || 'Error getting Cellars')
    }
  }

  /* const searchCellars = async () => {
    try {
      setCellars([])
      const { data } = axios.get('http://localhost:3200/cellar/search', form)
      if(!data) getCellars()
      setCellars(data.cellars)
    } catch (err) {
      console.log(err)
      throw new Error(err.response.message || 'Error searching Cellars')
    }
  } */

  useEffect(() => getCellars, [])

  return (
    <>
      <main>
        <div className="left binding color">
          <i className="fa-solid fa-warehouse"></i>
          |  CONTROL CELLAR
        </div>

        <div>
          <div className="input-group rounded">
            <input /* onChange={handleChange} */ name='name' type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
              <button /* onClick={searchCellars} */><i className="fas fa-search"></i></button>
            </span>
          </div>
        </div>




        <div className='row g-0 justify-content-center'>
          {
            cellars.map(({ name, description, location }, i) => {
              return (
                <CardCellar
                  key={i}
                  title={name}
                  description={description}
                  location={location}
                ></CardCellar>
              )
            })
          }
        </div>
        <div>
          <button className='btn btn-primary'>Agregar</button>
        </div>
      </main>
    </>
  )
}
