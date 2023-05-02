'use strict'

const Lease = require('./lease.model')
const infoClient = ['name', 'surname']
const infoWorker = ['name', 'surname']
const infoCellar = ['name', 'description']
const infoAddService = ['name', 'description']

exports.test = (req, res) => {
    res.send({ message: 'Test function is running' })
}

exports.saveLease = async (req, res) => {
    try {
        //obtener data
        let data = req.body
        //validar duplicados
        let leaseExist = await Lease.findOne({_id: data.cellar})
        if(leaseExist) return res.status(500).send({message:"El arrendamiento ya ha sido creado"})
        //guardar
        let leaseSave = new Lease(data)
        await leaseSave.save()
        return res.send({message:"lease created"})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "Error creatign additional services" })
    }
}

exports.updateLease = async (req, res) => {
    try {
        //obtener id
        let leaseId = req.params.id;
        //obtener data
        let data = req.body
        //buscar para que no hayan duplicados
        let existLease = await Lease.findOne({_id: leaseId})
        if(existLease){
            let updateLease = await Lease.findOneAndUpdate(
                {_id: leaseId},
                data,
                {new: true}
            )
            return res.send({message:"Lease a sido actualizado", updateLease})
        }
        return res.send({message: "Lease not found and not updating"})
        //actualizar
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "Error updating lease" })
    }
}

exports.deleteLease = async (req, res) => {
    try {  
        //obtener id
        let leaseId = req.params.id;
        //eliminar
        let deleteLease = await Lease.findOneAndDelete({_id: leaseId})
        if(!deleteLease) return res.status(404).send({message:"Error removing lease"})
        return res.send({message: 'Lease deleted sucessfully', deleteLease})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "Error deleting lease" })
    }
}

exports.getLease = async (req, res) => {
    try {
        let lease = await Lease.find().populate('client', infoClient).populate('worker', infoWorker).populate('cellar', infoCellar).populate('additionalService', infoAddService);
        return res.send({message:"Lease found", lease})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: "Error getting lease" })
    }
}