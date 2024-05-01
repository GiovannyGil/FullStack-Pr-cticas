import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)

// exportar el modelo de usuario basado en el schema
export default mongoose.model('User', userSchema)