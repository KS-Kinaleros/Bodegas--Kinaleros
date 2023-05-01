import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardCellar } from '../components/CardCellar'

export const CellarPage = () => {
  const [cellars, setCellars] = useState([{}])

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

  useEffect(() => getCellars, [])

  return (
    <>
      <main>
        <div className="left binding color">
        <i class="fa-solid fa-warehouse"></i>
          |  CONTROL CELLAR
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
      </main>
    </>
  )
}
