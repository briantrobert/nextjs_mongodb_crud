import { Schema, model, models } from "mongoose";


//definicion de un esquema en MongoDB
const booksSchema = new Schema({
    title: {
        type: String,
        require: [true, 'El titulo es requerido'], //requerido y descripcion
        unique: true, //si es un campo unico 
        trim: true,
    },
    author:{
        type: String,
        require: [true, 'El autor es requerido']
    },
    publicated:{
        type: String
    },
    description:{
        type: String
    },
},{
    //timestamps: true -> esto añade los campos de fecha y hora de creacion y actualizacion de cada objeto cuando sea creado
    timestamps: true, 
})

// const authorsSchema = new Schema({
//     title: {
//         type: String,
//         require: [true, 'El titulo es requerido'], //requerido y descripcion
//         unique: true, //si es un campo unico 
//         trim: true,
//     },
//     author:{
//         type: String,
//         require: [true, 'El autor es requerido']
//     },
//     description:{
//         type: String
//     },
// },{
//     //timestamps: true -> esto añade los campos de fecha y hora de creacion y actualizacion de cada objeto cuando sea creado
//     timestamps: true, 
// })

//si existe otro modelo Book utilizalo sino
// utiliza el que se esta creando en la linea model('Book', booksSchema)
export default models.Book || model('Book', booksSchema)
