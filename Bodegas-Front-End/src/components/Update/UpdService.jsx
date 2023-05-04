import React from 'react'

export const UpdService = () => {
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

    return (
        <div>UpdService</div>
    )
}
