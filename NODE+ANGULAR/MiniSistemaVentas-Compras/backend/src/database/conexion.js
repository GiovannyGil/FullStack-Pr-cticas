import {Sequelize} from 'sequelize'


// establecer la conexion a la base de datos
// si la base de datos no existe, se creara
const sequelize = new Sequelize('minisistema', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// funcion para crear la conexion a la base de datos si no

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')

        await sequelize.sync({ alter: true });
        console.log('Migración exitosa. Los modelos se han sincronizado con la base de datos.');
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

testConnection()


// exportar la conexion
export default sequelize