'use strict'

const AddService = require('./additionalService.model')

exports.test = (req, res) => {
    res.send({ message: 'Test function is running' })
}

exports.saveAddService = async (req, res) => {
    try {
        //capturar los datos
        let data = req.body;
        //validar que no hayan duplicados
        let addServiceExist = await AddService.findOne({name: data.namee})
        if(addServiceExist) return res.status(500).send({mesage: "Additional service already created"})
        //guardar
        let addService = new AddService(data)
        await addService.save()
        return res.send({message:"Additional services created"})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:"Error creating additional services"})
    }
}

exports.updateAddService = async (req, res) => {
    try {
        //obter id
        let addServiceId = req.params.id;
        //obtener data
        let data = req.body;
        //validar que exista el servicio
        //actualizar
        let addServiceUpdate = await AddService.findOneAndUpdate(
            {_id: addServiceId},
            data,
            {new: true}        
        )
        if(!addServiceUpdate) return res.status(400).send({message: "Additional service no actualizado"})
        return res.send({message:"Additional service update", addServiceUpdate})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: "Error updating Additional service"})
    }
}

exports.deleteAddService = async (req, res) => {
    try {
        let addServiceId = req.params.id;
        let data = req.body

        let addServiceDelete = await AddService.findOneAndDelete({_id: addServiceId})
        if(!addServiceDelete) return res.status(400).send({message: "Addtional service no eliminado"})
        return res.status(404).send({message:`Additional service ${addServiceDelete.name} eliminado`})
    } catch (er) {
        console.error(err)
        return res.status(500).send({message: "Error deleting Additional service"})
    }
}

exports.getServices = async (req, res)=>{
    try {
        let addService = await AddService.find()
        return res.send({message: "Additional service",addService})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:"Error getting Additional service"})
    }
}