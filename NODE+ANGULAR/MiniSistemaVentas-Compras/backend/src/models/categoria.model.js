import { DataTypes } from "sequelize"
import db from "../database/conexion.js"

// establecer modelo de categoria con sequelize -> tabla categoria de la base de datos

const Categoria = db.define('categorias', {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100)
    }
})

export default Categoria