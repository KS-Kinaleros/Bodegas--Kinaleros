import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardCellar } from '../components/CardCellar'
import { AddCellar } from '../components/Add/AddCellar'

export const CellarPage = () => {
  const [cellars, setCellars] = useState([{}])

  const [form, setForm] = useState({
    name:''
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
    }
  }

  const searchCellars = async () => {
    try {
      setCellars([])
      const { data } = await axios.post('http://localhost:3200/cellar/search', form)
      if(!data.cellars) getCellars()
      setCellars(data.cellars)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => getCellars, [])

  return (
    <>
      {/* <AddCellar></AddCellar> */}
      <main>
        <div className="left binding color">
          <i className="fa-solid fa-warehouse"></i>
          |  CONTROL CELLAR
        </div>

        {/* bara de busqueda */}
        <div>
          <div className="input-group rounded">
            <input onChange={handleChange} name='name' type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
              <button onClick={searchCellars}><i className="fas fa-search"></i></button>
            </span>
          </div>
        </div>

        <div className='row g-0 justify-content-center'>
          {
            cellars.map(({_id, name, description, location }, i) => {
              return (
                <CardCellar
                  key={i}
                  _id={_id}
                  title={name}
                  description={description}
                  location={location}
                ></CardCellar>
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
