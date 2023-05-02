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
            const {data} = axios.post('http://localhost:3200/cellar/save', form)
        } catch (err) {
            console.log(err)
            throw new Error(err.response.message || 'Error add cellar')
        }
    }

    return (
        <>
        <h1>{title}</h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input onChange={handleChange} name='name' type="text" className="form-control" id="inputName" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <input onChange={handleChange} name='description' type="text" className="form-control" id="inputPrice" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Size</label>
                    <input onChange={handleChange} name='size' type="text" className="form-control" id="inputStock" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Location</label>
                    <input onChange={handleChange} name='location' type="text" className="form-control" id="inputCategory" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Price</label>
                    <input onChange={handleChange} name='price' type="text" className="form-control" id="inputCategory" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Availability</label>
                    <input onChange={handleChange} name='availability' type="text" className="form-control" id="inputCategory" required/>
                </div>
                <button onClick={(e)=> addCellar(e)} type="submit" className="btn btn-primary">Add Cellar</button>
            </form>
        </>
    )
}
