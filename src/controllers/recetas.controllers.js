import { validationResult } from "express-validator"
import Receta from "../models/receta"

//Controlador para obtener recetas

export const obtenerRecetas = async (req, res)=>{
    try {
        const recetas = await Receta.find()
        res.status(200).json(recetas)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar las recetas de la base de datos"
        })
    }
}
//Controlador para obtener una sola receta

export const obtenerReceta = async (req, res)=>{
    try {
        const {id} = req.params
        const receta = await Receta.findById(id)
        res.status(200).json(receta)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar la receta de la base de datos"
        })
    }
}

// Controlador para crear una receta

export const crearReceta = async (req, res)=>{
    try {
         //trabajar con el resultado de la validacion de express-validator
         const errors = validationResult(req)
         // errors.isEmpty() // true: esta vacio, false: hay error
         if(!errors.isEmpty()){
             return res.status(400).json({errores: errors.array()})
         }
        const recetaNueva = new Receta(req.body)
        await recetaNueva.save()
        res.status(201).json({
            mensaje: "La receta fue creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear la receta"
        })
    }
}

// controlador para eliminar una receta

export const borrarReceta = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const {id} = req.params   
        await Receta.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "La receta fue eliminada"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar la receta"
        })
    }
}

// controlador para editar una receta

export const editarReceta = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const {id} = req.params   
        await Receta.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "La receta fue actualizada correctamente"
        })
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar la receta"
        })
    }
}