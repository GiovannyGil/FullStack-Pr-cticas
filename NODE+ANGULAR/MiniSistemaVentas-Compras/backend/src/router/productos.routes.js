import Router from "express"

const router = Router()

// obtener todos los productos
router.get('/productos', (req, res) => {
    res.json({
        message: 'BIENVENIDO A LA RUTA DE PRODUCTOS'
    })
})
// obtener un producto por id
router.get('/productos/:id', (req, res) => {
    res.json({
        message: 'Obtener un producto por id'
    })
})

// crear un producto
router.post('/productos', (req, res) => {
    res.json({
        message: 'Crear un producto'
    })
})
// actualizar un producto
router.put('/productos/:id', (req, res) => {
    res.json({
        message: 'Actualizar un producto'
    })
})

// eliminar un producto
router.delete('/productos/:id', (req, res) => {
    res.json({
        message: 'Eliminar un producto'
    })
})


export default router