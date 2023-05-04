import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const AddLease = () => {
    const title = "Add Lease"
    const [users, setUsers] = useState([])
    const [cellars, setCellars] = useState([])
    const [addServices, setAddServices] = useState([])


    const [form, setForm] = useState({
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

    }

    const getUsers = async () => {
        try {
            const { data } = await axios('http://localhost:3200/user/getUsers')
            setUsers(data.users)
        } catch (err) {
            console.log(err);
        }
    }

    const getCellars = async () => {
        try {
            const { data } = await axios('http://localhost:3200/cellar/get')
            setCellars(data.cellar)
        } catch (err) {
            console.log(err);
        }
    }

    const getAddServices = async () => {
        try {
            const { data } = await axios('http://localhost:3200/service/get')
            setAddServices(data.addService)
        } catch (error) {
            console.log(err);
        }
    }

    const addLease = async () => {
        try {
            const { data } = await axios.post('http://localhost:3200/lease/save', form)
            alert(data.message)
            window.location.reload()
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    useEffect(()=> {getUsers();
    getCellars();
    getAddServices();} ,[])


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

                            {/* client */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Client</label>
                                {/* <input onChange={handleChange} name='name' type="text" className="form-control" required /> */}
                                <select className="form-control" name="client" >
                                    {
                                        users.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id}> {name} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* worker */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Worker</label>
                                {/* <input onChange={handleChange} name='description' type="text" className="form-control" required /> */}
                                <select className="form-control" name="worker" >
                                    {
                                        users.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id}> {name} </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>


                            {/* cellar */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Cellar</label>
                                {/* <input onChange={handleChange} name='size' type="text" className="form-control" required /> */}
                                <select className="form-control" name="cellar" >
                                    {
                                        cellars.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* additionalService */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Aditional Service</label>
                                {/* <input onChange={handleChange} name='location' type="text" className="form-control" required /> */}
                                <select className="form-control" name="additionalService" >
                                    {
                                        addServices.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* total */}
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Total</label>
                                <input onChange={handleChange} type="number" className="form-control" name='total' required />
                            </div>

                            {/* botones para cancelar o agregar */}
                            <div className='modal-footer'>
                                <button onClick={() => addLease()} type="submit" className="btn btn-primary">Add Lease</button>
                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" >Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
