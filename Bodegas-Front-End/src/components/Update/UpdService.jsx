import axios from 'axios'
import React, { useState } from 'react'

export const UpdService = ({ _id }) => {
    const title = "Update Additional Service"

    const [addService, setAddService] = useState([{}])

    const [form, setForm] = useState({
        name: '',
        description: '',
        price: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const updateService = async () => {
        try {
            const { data } = await axios.put(`http://localhost:3200/service/update/${_id}`, form)
            alert(data.message)
            window.location.reload()
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    /* get id de Additional Service */
    const getServiceId = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/service/getId/${_id}`)
            setAddService(data.services)
        } catch (err) {
            alert(data.message)
            window.location.reload()
        }
    }

    useEffect(() => getServiceId, [])

    return (
        <>
            <div className="modal" tabIndex="-1" id="myService">
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
                                <label htmlFor="" className="form-label">Price</label>
                                <input onChange={handleChange} name='price' type="number" className="form-control" required />
                            </div>
                            {/* botones para cancelar o agregar */}
                            <div className='modal-footer'>
                                <button onClick={() => updateService()} type="submit" className="btn btn-primary">Add Service</button>
                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" >Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
