import React from 'react'

export const UpdUser = () => {
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

    return (
        <div>UpdUser</div>
    )
}
