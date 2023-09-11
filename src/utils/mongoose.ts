import {connect, connection} from "mongoose";

//JavaScript usa la lineas comentadas de abajo
// const conn = {
//     isConnected: false
//   }

//typescript
const options: any = {
    useUnifiedTopology: true,
  
    useNewUrlParser: true
  }

export async function connectDB() {
    
 
 //TODO debo usar dos direcciones una par ael trabajo con la db local y otra cuando este online
//usar mongodb en la nube

//  JavaScript   
//   if(conn.isConnected) return;

//   const db = await connect(process.env.DATABASE_URL)
//   conn.isConnected = db.connections[0].readyState

//typescript
if (!connection.readyState) {
    console.log('Connecting to',process.env.DATABASE_URL)
    connect(process.env.DATABASE_URL, options)
  }
  
}

connection.on('connected', () => {
    console.log('MongoDB esta conectado')
})

connection.on('error', (err) => {
    console.log('Ocurio un error', err)
})
