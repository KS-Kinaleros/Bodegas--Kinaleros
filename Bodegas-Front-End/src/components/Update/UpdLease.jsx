import React from 'react'

export const UpdLease = () => {
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

    return (
        <div>UpdLease</div>
    )
}
