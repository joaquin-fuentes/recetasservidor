import { Router } from "express";
import {
    borrarReceta,
    crearReceta,
    editarReceta,
    obtenerReceta,
    obtenerRecetas
} from "../controllers/recetas.controllers";
import {check} from "express-validator"

const router = Router()


router.route("/recetas")
    .get(obtenerRecetas)
    .post([check("receta")
           .notEmpty()
           .withMessage("La receta es un dato obligatorio")]
                ,crearReceta)
router.route("/recetas/:id")
    .get(obtenerReceta)
    .delete(borrarReceta)
    .put(editarReceta)

export default router