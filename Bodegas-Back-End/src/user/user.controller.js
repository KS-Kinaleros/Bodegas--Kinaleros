'use strict'

const User = require('./user.model')
const { validateData, encrypt, checkPassword } = require('../utils/validate');
const { createToken } = require('../services/jwt');

exports.test = async (req, res) => {
    res.send({ message: 'Test function is running' })
}

exports.userDefault = async (req, res) => {
    try {
        let data = {
            name: "Admin",
            surname:"Administrador",
            username:"admin",
            password:"admin",
            phone:"12345678",
            role:"admin"
        }
        data.password = await encrypt(data.password)
        let existUser = await User.findOne({name: "Admin"})
        if(existUser) return console.log("Administrador por default ya ha sido creado")
        let defUser = new User(data)
        await defUser.save()
        return console.log("Administrador creado correctamente")
    } catch (error) {
        console.error(err)
    }
}


exports.loginUser = async (req, res) => {
    try {
        //obtener data
        let data = req.body;
        let credentials = {
            username: data.username,
            password: data.password
        }
        let msg = validateData(credentials)
        if (msg) return res.status(400).send(msg)
        //validar que si exista
        let user = await User.findOne({ username: data.username })
        //validar la contraseña
        if (user && await checkPassword(data.password, user.password)) {
            let token = await createToken(user)
            return res.send({ message: "user logged satisfactoriamente", token })
        }
        return res.status(400).send({ message: "invalid credentials" })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "" })
    }
}

exports.registerClient = async (req, res) => {
    try {
        //data
        let data = req.body
        let params = {
            password: data.password
        }
        let validate = validateData(params)
        if (validate) return res.status(400).send(validate)
        data.role = "CLIENT"
        data.password = await encrypt(data.password)
        let user = new User(data)
        await user.save()
        return res.send({ message: "cuenta creada satisfactoriamente" })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "Errore creating account" })
    }
}

exports.saveUser = async (req, res) => {
    try {
        let data = req.body
        let params = {
            password: data.password
        }
        let validate = validateData(params)
        if (validate) return res.status(400).send(validate)
        data.password = await encrypt(data.password)
        let user = new User(data)
        await user.save()
        return res.send({ message: "Cuenta creada satisfactoriamente" })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "Error creating account" })
    }
}

exports.updateUser = async (req, res) => {
    try {
        let userId = req.params.id;
        let token = req.user.sub;
        let data = req.body
        if(userId != token) return res.status(500).send({message: "No tienes permiso para realizar esta accion"})
        if(data.password || Object.entries(data).length === 0 || data.role) return res.status(400).send({message: 'Have submitted some data that cannot be updated'});
        let userUpdated = await User.findOneAndUpdate(
            {_id: token},
            data,
            {new: true} 
        )
        if(!userUpdated) return res.status(404).send({message: 'User not found and not updated'});
        return res.send({message: 'User updated', userUpdated})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "Error al editar la cuenta" })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let userId = req.params.id;
        let token = req.user.sub;
        if(userId != token) return res.status(500).send({message: "No tienes permiso para realizar esta accion"})

        let userDelete = await User.findByIdAndDelete({_id: token})
        if(!userDelete) return res.send({message:"la cuenta no fue encontrado y por ende no eliminada"})
        return res.send({message:`Cuenta con username ${userDelete.username} fue eliminada satisfactoriamente`})
    } catch (er) {
        console.error(err)
        return res.status(500).send({ message: " Error al eliminar la cuenta" })
    }
}

exports.getUsers = async(req, res)=>{
    try {
        let users = await User.find();
        return res.send({message: 'User found', users})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: " Error getting users" })
    }
}