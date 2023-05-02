import React from 'react'

export const AddLease = () => {
    const title = "Add Cellar"

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

    const AddLease = async () => {
        try {
            const { data } = axios.post('http://localhost:3200/lease/save', form)
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
                    <label htmlFor="" className="form-label">Client</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Worker</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Cellar</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" required />
                    <input  type="number" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Additional Service</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Total</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" required />
                </div>
                <button onClick={(e)=> AddLease(e)} type="submit" className="btn btn-primary">Add</button>
            </form>
        </>
    )
}
