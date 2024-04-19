import { QueryTypes } from 'sequelize'
import DB from '../database/conexion.js'

// funcion para obtener todas las categorias

export const obtenerCategorias = async (req, res) => {
    try {
        // obtener todas las categorias
        const categorias = await DB.query('SELECT * FROM categorias', { type: QueryTypes.SELECT })
        // si el contenido de la tabla es vacio, enviar mensaje al cliente
        if (categorias.length === 0) {
            return res.status(404).json({
                message: 'No hay categorias registradas'
            })
        }
        // enviar respuesta al cliente en formato json
        res.json(categorias)
    } catch (error) {
        // en caso de error, enviar mensaje al cliente
        console.log('Error al obtener las categorias:', error)
    }
}


// funcion para obtener una categoria por id
export const obtenerCategoriaPorId = async (req, res) => {
    try {
        // obtener el id de la categoria
        const { id } = req.params
        // obtener la categoria por id
        const categoria = await DB.query('SELECT * FROM categorias WHERE id = @id')
        // si la categoria no existe, enviar mensaje al cliente
        if (categoria.length === 0) {
            return res.status(404).json({
                message: 'La categoria no existe'
            })
        }
        // enviar respuesta al cliente en formato json
        res.json(categoria[0])
    } catch (error) {
        console.log('Error al obtener la categoria por id:', error)
    }
}

// funcion para crear una categoria
export const crearCategoria = async (req, res) => {
    try {
        // obtener los datos de la categoria
        const { nombre, descripcion } = req.body
        // insertar la categoria en la base de datos
        const categoria = await DB.query('INSERT INTO categorias(nombre, descripcion) VALUES(?, ?)', { replacements: [nombre, descripcion] })
        // enviar respuesta al cliente en formato json
        res.json({
            message: 'Categoria creada correctamente',
            categoria: {
                id: categoria[0],
                nombre,
                descripcion
            }
        })
    } catch (error) {
        console.log('Error al crear la categoria:', error)
    }
}


