import React, { useEffect, useState } from 'react'
import { CardAddService } from '../components/CardAddService'
import axios from 'axios'
import { AddService } from '../components/Add/AddService'

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
    <AddService></AddService>
      <main>
        <div className="left binding color">
          <i className="fa-solid fa-plus"></i>
          |  CONTROL ADDITIONAL SERVICES
        </div>



        <div className='row g-0 justify-content-center'>
          {
            addService.map(({ _id, name, description }, i) => {
              return (
                <CardAddService
                  key={i}
                  _id={_id}
                  title={name}
                  description={description}
                >
                </CardAddService>
              )
            })
          }
        </div>

        {/* Boton para agregar aditional service */}
        <div>
          <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal">Agregar</button>
        </div>
      </main>
    </>
  )
}