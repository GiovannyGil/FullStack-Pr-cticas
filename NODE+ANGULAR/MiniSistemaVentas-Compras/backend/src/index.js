import app from './app/app.js'

// definir el puerto
const PORT = process.env.PORT || 3000

// escuchar el puerto -> inciar la aplicacion
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})