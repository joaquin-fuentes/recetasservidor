import { Schema, model } from "mongoose"

const recetaSchema = new Schema({
    receta: {
        type: String,
        minLength: 2,
        maxLength: 50,
        unique: true,
        required: true
    },
    minutos: {
        type: Number,
        min: 1,
        max: 600,
        required: true,
    },
    imagen: {
        type: String,
        minLength: 2,
        maxLength: 600,
        required: true,
        match: /.*\.(jpg|png|jpeg)$/
    },
    categoria: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    descripcion: {
        type: String,
        minLength: 2,
        maxLength: 600,
        required: true
    },
    ingredientes: [
        {
            type: String,
            required: true,
        },
    ],
    procedimiento: [
        {
            type: String,
            required: true,
        },
    ]

})

const Receta = model("receta", recetaSchema)

export default Receta