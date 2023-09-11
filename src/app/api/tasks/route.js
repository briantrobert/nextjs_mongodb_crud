import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Books from "@/models/Books";

export const GET = async() => {
   try {
      connectDB()    //conectar con la BD
   const book = await Books.find()  //hacer una busqueda de todos los archivos
   return NextResponse.json({
      data: book,
      message: "Consulta exitosa"
   });
   } catch (error) {
      return NextResponse.json(error.message, {
         status: 400
      })
   }
}


export const POST = async(request) => { //Al metodo post se le envian parametros y estos se obtienen a traves de request
   try{
      connectDB()
      const data = await request.json()  //obtengo los datos utilizando await ya que es azincrono y a la espera de respuesta
      const newBook = new Books(data)   // creo un nuevo Book segun los datos recividos 
      const savedBook = await newBook.save()  //guardo en la BD el nuevo Book creado
      return NextResponse.json({
         data: [savedBook],
         message: "Creado exitosamente"
      });   //lo devuelvo como respuesta
  
   }catch(error){
      //en csao de haber un error utilizao NextResponse para manejarlo
      return NextResponse.json(error.message, {
         status: 400
      })
   }
}