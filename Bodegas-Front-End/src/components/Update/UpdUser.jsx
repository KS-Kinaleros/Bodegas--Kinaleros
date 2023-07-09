import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UpdUser = ({ _id }) => {
    const title = "Update User"

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const [user, setUser] = useState({})

    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        phone: '',
        email: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const updateUser = async () => {
        try {
            const { data } = await axios.put(`http://localhost:3200/user/update/${_id}`, form, { headers: headers })
            alert(data.message)
            window.location.reload()
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    /* get id para user */
    const getUserId = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/user/getId/${_id}`)
            setUser(data.user)
            console.log(data.user)
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    useEffect(() => getUserId, [])

    return (
        <>
            <div className="modal" tabIndex="-1" id="myUser">
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
                                <label htmlFor="" className="form-label">Surname</label>
                                <input onChange={handleChange} name='surname' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Username</label>
                                <input onChange={handleChange} name='username' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input onChange={handleChange} name='phone' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Email</label>
                                <input onChange={handleChange} name='email' type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Password</label>
                                <input onChange={handleChange} name='password' type="text" className="form-control" required />
                            </div>

                            {/* botones para cancelar o actualizar */}
                            <div className='modal-footer'>
                                <button onClick={() => updateUser()} type="submit" className="btn btn-primary">Add Client</button>
                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" >Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
