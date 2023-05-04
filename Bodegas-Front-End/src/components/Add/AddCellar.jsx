import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const AddCellar = () => {
    const title = "Add Cellar"

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

    const addCellar = async () => {
        try {
            const { data } = await axios.post('http://localhost:3200/cellar/save', form)
            alert(data.message)
            window.location.reload()

        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    return (
        <>
            <div className="modal" tabIndex="-1" id="myModal">
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
                                <input onChange={handleChange} name='name' type="text" className="form-control" required />
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
                                <input onChange={handleChange} name='price' type="number" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Availability</label>
                                <input onChange={handleChange} name='availability' type="text" className="form-control" required />
                            </div>

                            {/* botones para cancelar o agregar */}
                            <div className='modal-footer'>
                                <button onClick={() => addCellar()} type="submit" className="btn btn-primary">Add Cellar</button>
                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
