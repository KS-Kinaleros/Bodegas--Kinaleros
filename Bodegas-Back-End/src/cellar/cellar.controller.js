'use strict'

const Cellar = require('./cellar.model')
const { validateData } = require('../utils/validate')

exports.test = (req, res) => {
    res.send({ message: 'Test function is running' })
}

exports.addCellar = async (req, res) => {
    try {
        let data = req.body;
        //validar duplicados
        let existCellar = await Cellar.findOne({ name: data.name });
        if (existCellar) {
            return res.send({ message: 'Cellar already created' })
        }
        let cellar = new Cellar(data);
        await cellar.save();
        return res.status(201).send({ message: 'Created cellar' })
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error saving cellar' });
    }
}

exports.getCellars = async (req, res) => {
    try {
        let cellar = await Cellar.find();
        return res.send({ message: 'Bodegas found', cellar })
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error getting bodegas' });
    }
}

exports.searchCellar = async (req, res) => {
    try {
        let params = {
            name: req.body.name
        }
        let validate = validateData(params)
        if (validate) return res.status(400).send(validate);
        let cellars = await Cellar.find({
            name:{
                $regex: params.name,
                $options: 'i'
            }
        })
        return res.send({cellars})
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error searching cellar' })
    }
}

exports.updateCellar = async (req, res) => {
    try {
        //obtener el id
        let cellarId = req.params.id;
        //Obtener los datos del formulario (Body)
        let data = req.body;
        //buscar si existe (Para que no hayan duplicados)
        let existCellar = await Cellar.findOne({ _id: cellarId });
        if (existCellar) {
            let updateCellar = await Cellar.findOneAndUpdate(
                {_id: cellarId},
                data,
                {new: true}
            )
            return res.send({message:"Cellar a sido actualizada", updateCellar})
        }
        return res.send({message:"Celalar not found and not updating"})
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating bodega' });
    }
}

exports.deleteCellar = async (req, res) => {
    try {
        //obtener id
        let cellarId = req.params.id;
        //eliminar la bodega
        let deletedCellar = await Cellar.findOneAndDelete({ _id: cellarId });
        if (!deletedCellar) return res.status(404).send({ message: 'Error removing cellar or already deleted' });
        return res.send({ message: 'Cellar deleted sucessfully', deletedCellar });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting cellar' })
    }
}

exports.availability = async(req, res) =>{
    try{
      let bodegaId = req.params.id
      let {estado} = req.body;
      if( !estado ||
        !(
            estado == 'Habilitado'   ||
            estado == 'Desabilitado' 
        )
    ) return res.status(418).send({message: 'Invalid status'});
      const existEstado = await Bodega.findOneAndUpdate(
        {_id: bodegaId},
        {availability: estado},
        {new: true}
      )
  
      if(!existEstado) return res.status(418).send({message: 'Estado no se pudo actualizar'});
          return res.send({message: 'Estado Actualizado', existEstado});
  
    }catch(err){
      console.error(err);
      return res.status(500).send({message: "Error al cambiar esdato"})
    }
  };
  
  