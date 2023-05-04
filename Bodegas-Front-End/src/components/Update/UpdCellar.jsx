import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UpdCellar = ({_id}) => {
    const title = "Update Cellar"

    const [cellar, setCellar] = useState({})


    const [form, setForm] = useState({
        name: '',
        description: '',
        size: '',
        location: '',
        price: '',
        availability: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const updateCellar = async (_id) => {
        try {
            const { data } = await axios.put(`http://localhost:3200/cellar/update/${_id}`, form)
            alert(data.message)
            window.location.reload()
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    /* viendo si tiene que llevar un get para el update */
    const getCellarId = async (_id) => {
        try {
            const {data} = await axios.get(`http://localhost:3200/cellar/getId/${_id}`)
            setCellar(data.cellar)
            console.log(data.cellar)
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    useEffect(()=> getCellarId,[])

    return (
        <>
            <div className="modal" tabIndex="-1" id="myCellar">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* titulo */}
                        <div className='modal-header'>
                            <h1 className="modal-title">{title}</h1>
                        </div>

                        {/* formulario */}
                        <div className='modal-body'>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Name</label>
                                <input defaultValue={cellar.name} onChange={handleChange} name='name' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Description</label>
                                <input onChange={handleChange} name='description' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Size</label>
                                <input onChange={handleChange} name='size' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Location</label>
                                <input onChange={handleChange} name='location' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Price</label>
                                <input onChange={handleChange} name='price' type="text" className="form-control" required />
                            </div>
                            {<div className="mb-3">
                                <label htmlFor="" className="form-label">Availability</label>
                                <input onChange={handleChange} name='availability' type="text" className="form-control" required />
                            </div>}

                            {/* botones para cancelar o agregar */}
                            <div className='modal-footer'>
                                <button onClick={() => updateCellar()} type="submit" className="btn btn-primary">Update Cellar</button>
                                <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" >Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



/* import React, { useState } from 'react'

export const UpdCellar = () => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        size: '',
        location: '',
        price: '',
        availability: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>UpdCellar</div>
    )
} */
