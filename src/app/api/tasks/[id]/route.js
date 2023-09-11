import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Books from "@/models/Books";

export const GET = async(request, {params}) => {
   try {
      connectDB()
      const bookFound = await Books.findById(params.id) //encontrar un registro dado un id 

      if (!bookFound)
         return NextResponse.json({
            message: "Libro no encontrado",
         }, {
            status: 404
         })

      return NextResponse.json({
         data: [bookFound],
         message: "Encontrado exitosamente"
      });

   } catch (error) {
      return NextResponse.json(error.message, {
         status: 400
      })
   }
}

export const PUT = async(request, {params}) => {
   try {
      connectDB()
      const data = await request.json()

      //encontrar un registro dado un id y actualizarlo
      //para que devuelva el objeto actualizado se debe agregar como parametro {new: true} a findByIdAndUpdate
      const bookFoundAndUpdate = await Books.findByIdAndUpdate(params.id, data, {
         new: true,
      })
      return NextResponse.json({
         data: [bookFoundAndUpdate],
         message: "Actualizado exitosamente"
      })
   } catch (error) {
      return NextResponse.json(error.message, {
         status: 400
      })
   }
}

export const DELETE = async(request, {params}) => {
   try {
      connectDB()

      //encontrar y eliminar un book con findByIdAndDelete
      const bookFoundAndUpdate = await Books.findByIdAndDelete(params.id)

      if (!bookFoundAndUpdate)
         return NextResponse.json({
            message: "Libro no encontrado",
         }, {
            status: 404
         })
      return NextResponse.json({
         data: [bookFoundAndUpdate],
         message: "Eliminado exitosamente"
      })
   } catch (error) {
      return NextResponse.json(error.message, {
         status: 400
      })
   }
}


