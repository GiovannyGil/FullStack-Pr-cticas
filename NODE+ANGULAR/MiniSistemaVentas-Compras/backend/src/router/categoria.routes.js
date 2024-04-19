import Router from "express"
import { obtenerCategorias,obtenerCategoriaPorId } from '../controllers/categoria.controller.js'

const router = Router()

// obtener todas las categorias
router.get('/categorias', obtenerCategorias)
// obtener una categoria por id
router.get('/categorias/:id', obtenerCategoriaPorId)
// crear una categoria
router.post('/categorias', (req, res) => {
    res.json({
        message: 'Crear una categoria'
    })
})
// actualizar una categoria
router.put('/categorias/:id', (req, res) => {
    res.json({
        message: 'Actualizar una categoria'
    })
}) 
// eliminar una categoria
router.delete('/categorias/:id', (req, res) => {
    res.json({
        message: 'Eliminar una categoria'
    })
})

export default router