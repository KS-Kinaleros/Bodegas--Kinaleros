import React, { useState, useEffect } from 'react'
import { CardLease } from '../components/CardLease'
import axios from 'axios'

export const LeasePage = () => {
  const [cellars, setCellars] = useState([{}])

  const getLease = async () => {
    try {
      const { data } = await axios('http://localhost:3200/lease/get')
      if (data.lease) {
        setCellars(data.lease)
        console.log(data.lease)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.response.message || 'Error getting Lease')
    }
  }

  useEffect(() => getLease, [])

  return (
    <>
      <main>
        <div className="left binding color">
        <i class="fa-solid fa-warehouse"></i>
          | CONTROL LEASES
        </div>

        <div className='row g-0 justify-content-center'>
          {
            cellars.map(({ cellar, client, worker, total }, i) => {
              return (
                <CardLease
                  key={i}
                  title={cellar?.name}
                  client={client?.name}
                  worker={worker?.name}
                  total={total}
                ></CardLease>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

