import express from 'express'
import morgan from 'morgan'
import db from '../database/conexion.js'
import productosRouter from '../router/productos.routes.js'
import CategoriaRouter from '../router/categoria.routes.js'

// inicializar la aplicacion
const app = express()

// middlewares -> usar morgran para ver las peticiones por consola
app.use(morgan('dev'))

// llama a la base de datos
const testConnection = async () => {
    try {
        // autenticar la conexion
        await db.authenticate()
        console.log('La conexion a la base de datos se ha establecido correctamente.')

        // sincronizar los modelos con la base de datos
        await db.sync( { alter: true })
        console.log('Modelos sincronizados con la base de datos.')

        // arrancar la aplicacion o realizar otras operaciones aqui
    } catch (error) {
        // en caso de error al autenticar la conexion
        console.error('No se pudo conectar a la base de datos:', error)
    }

}
// llamar a la funcion para probar la conexion
testConnection()


// rutas -> inicial
app.get('/', (req, res) => {
    res.json({
        message: 'Hola mundo'
    })
})

// rutas -> categorias
app.use('/api', CategoriaRouter)
// rutas -> productos
app.use('/api', productosRouter)





// exportar la aplicacion
export default app