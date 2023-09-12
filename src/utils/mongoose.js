import {connect, connection} from "mongoose";


// JavaScript usa la lineas comentadas de abajo
const conn = {
    isConnected: false
  }

export async function connectDB() {
  let uri = process.env.MONGODB_URI;
  let options = {};
 //TODO debo usar dos direcciones una par ael trabajo con la db local y otra cuando este online
//usar mongodb en la nube

if(!process.env.MONGODB_URI){
  throw new Error("Añade tu direccion de Mongo al env.local");
}

//  JavaScript   
  if(conn.isConnected) return;

  const db = await connect(process.env.MONGODB_URI)
  conn.isConnected = db.connections[0].readyState

//typescript
// if (!connection.readyState) {
//     // console.log('Connecting to',process.env.DATABASE_URL)
//     connect(process.env.DATABASE_URL, options)
//   }
  
}

connection.on('connected', () => {
    console.log('MongoDB esta conectado')
})

connection.on('error', (err) => {
    console.log('Ocurio un error', err)
})
