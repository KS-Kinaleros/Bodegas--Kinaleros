import React from 'react'

export const AddUser = () => {
    const title = "Add Cellar"

    const [form, setForm] = useState({
        name:'',
        surname:'',
        username:'',
        phone:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

}

const addUser = async () => {
    try {
        const {data} = axios.post('http://localhost:3200/user/saveClient', form)
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
                    <label htmlFor="" className="form-label">Surname</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputPrice" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputStock" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Phone</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputCategory" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Emai</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputCategory" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input onChange={handleChange} name='' type="text" className="form-control" id="inputCategory" required/>
                </div>
                <button onClick={(e)=> addUser(e)} type="submit" className="btn btn-primary">Add</button>
            </form>
    </>
)
}
