import React, { useEffect, useState } from 'react'
import { CardAddService } from '../components/CardAddService'
import axios from 'axios'

export const AddServicePage = () => {
  const [addService, setAddService] = useState([{}])

  const getAddService = async () => {
    try {
      const { data } = await axios('http://localhost:3200/service/get')
      if (data.addService) {
        setAddService(data.addService)
        console.log(data.addService)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.response.message || 'Error getting Additional Services')
    }
  }
 
   useEffect(() => getAddService, []) 

  return (
    <>
      <main>
        <div className="left binding color">
          <i className="fa-solid fa-plus"></i>
          |  CONTROL ADDITIONAL SERVICES
        </div>



        <div className='row g-0 justify-content-center'>
          {
            addService.map(({ name, description }, i) => {
              return (
                <CardAddService
                  key={i}
                  title={name}
                  description={description}
                >
                </CardAddService>
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