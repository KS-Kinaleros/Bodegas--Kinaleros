import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UpdLease = ({ _id }) => {
    const title = "Update Lease"

    const [lease, setLease] = useState({})

    /*     const [form, setForm] = useState({
            client: '',
            worker: '',
            cellar: '',
            additionalService: '',
            total: ''
        })
    
        const handleChange = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        } */

    const updateLease = async () => {
        try {
            let lease = {
                client: document.getElementById('inputClient').value,
                worker: document.getElementById('inputWorker').value,
                cellar: document.getElementById('inputCellar').value,
                additionalService: document.getElementById('inputService').value,
                total: document.getElementById('inputTotal').value
            }
            const { data } = await axios.put(`http://localhost:3200/lease/update/${_id}`, lease)
            alert(data.message)
            window.location.reload()
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    /* Get id para update */
    const getLeaseId = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/lease/getId/${_id}`)
            setLease(data.lease)
            console.log(data.cellar)
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    useEffect(() => getLeaseId, [])

    return (
        <>
            <div className="modal" tabIndex="-1" id="myLease">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* titulo */}
                        <div className='modal-header'>
                            <h1 className="modal-title">{title}</h1>
                        </div>

                        {/* formulario */}
                        <div className='modal-body'>

                            {/* client */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Client</label>
                                {/* <input onChange={handleChange} name='name' type="text" className="form-control" required /> */}
                                <select className="form-control" name="client" id='inputClient'>
                                    {
                                        users.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id} > {name} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* worker */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Worker</label>
                                {/* <input onChange={handleChange} name='description' type="text" className="form-control" required /> */}
                                <select className="form-control" name="worker" id='inputWorker'>
                                    {
                                        users.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id} > {name} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>


                            {/* cellar */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Cellar</label>
                                {/* <input onChange={handleChange} name='size' type="text" className="form-control" required /> */}
                                <select className="form-control" name="cellar" id='inputCellar'>
                                    {
                                        cellars.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id} >{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* additionalService */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Aditional Service</label>
                                {/* <input onChange={handleChange} name='location' type="text" className="form-control" required /> */}
                                <select className="form-control" name="additionalService" id='inputService' >
                                    {
                                        addServices.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id} >{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* total */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Total</label>
                                <input onChange={handleChange} id='inputTotal' type="number" className="form-control" name='total' required />
                            </div>

                            {/* botones para cancelar o agregar */}
                            <div className='modal-footer'>
                                <button onClick={() => updateLease()} type="submit" className="btn btn-primary">Add Lease</button>
                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" >Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
