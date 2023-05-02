import React from 'react'

export const AddService = () => {
    const title = "Add Cellar"

    const [form, setForm] = useState({
        name:'',
        description:'',
        price:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

}

const addService = async () => {
    try {
        const {data} = axios.post('http://localhost:3200/service/add', form)
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
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputName" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputPrice" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Price</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputStock" required/>
                </div>
                <button onClick={(e)=> addService(e)} type="submit" className="btn btn-primary">Add</button>
            </form>
    </>
)
}
