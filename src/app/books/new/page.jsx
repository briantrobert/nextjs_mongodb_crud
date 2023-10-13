'use client'
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { AiFillCheckCircle } from "react-icons/ai";

const initValues = {
  title: "",
  author: "",
  publicated: "",
  description: ""
}

function BookForm() {

  const router = useRouter();
  const params = useParams();

  const [formData, setData] = useState(initValues);

  const handelChange = (e) => setData({ ...formData, [e.target.name]: e.target.value });

  const newBook = async () => {
    try {
      const { data } = await axios.post('/api/tasks', formData)
      if (data.message == "Creado exitosamente") {
        router.push('/book_list')
        router.refresh() // antes se utilizaba router.refresh() para actualizar la pagina a la cual nos dirigiamos en esta version ya no hace falta
        return message
      }
    } catch (error) {
      return error.message
      console.log(error)
    }

  }

  const editBook = async (id) => {
    try {
      const { data } = await axios.put(`/api/tasks/${id}`, formData)
      if (data.message == "Actualizado exitosamente") {
        router.push('/book_list')
        router.refresh() // antes se utilizaba router.refresh() para actualizar la pagina a la cual nos dirigiamos en esta version ya no hace falta
        return message
      }
    } catch (error) {
      return error.message
      console.log(error)
    }

  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    return !params.id ? await newBook() : await editBook(params.id);
  }

  const loadData = async (id) => {
    try {
      const { data } = await axios.get(`/api/tasks/${id}`)
      if (data.message == "Encontrado exitosamente") {
        setData(data.data[0])
      }
      console.log(data.data[0])
    } catch (error) {
      return error.message
    }
  }

  useEffect(() => {
    if (params.id) {
      loadData(params.id)
    }
  }, [])


  return (
    <motion.div 
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{duration: 1}}
       className="flex justify-center items-center w-full h-[calc(100vh-7rem)]">
      <form className="w-96 bg-white p-5 rounded-md" onSubmit={handelSubmit}>
        <h1 className="font-bold text-3xl text-gray-800 mb-10">
          {
            !params.id ? "Insertar libro" : "Editar libro"}
        </h1>
        <div className="flex flex-col relative">
          <input id="title" required
            className="peer py-2 rounded-lg px-1 mt-1 border 
                 border-gray-500 focus:outline-none focus:ring-1 
                 focus:border-indigo-700 focus:ring-indigo-700 placeholder:transparent" value={formData.title} type="text" name="title" placeholder="Título ex: Harry Potter" onChange={handelChange} />
          <label htmlFor="title"
                 className="text-xl
                   absolute
                   left-1 -top-6
                   transition-all
                   font-semibold 
                   text-gray-900
                   peer-placeholder-shown:text-base
                   peer-placeholder-shown:text-gray-500
                   peer-placeholder-shown:top-3
                   peer-focus:-top-6 peer-focus:font-semibold
                   peer-focus:text-xl
                   peer-focus:text-gray-900">
                  Título
          </label>
        </div>
        <div className="flex flex-col mt-8 relative">
          <input id="author" required className="peer py-2 rounded-lg px-1 mt-1 border 
                 border-gray-500 focus:outline-none focus:ring-1 
                 focus:border-indigo-700 focus:ring-indigo-700 placeholder:transparent" value={formData.author} type="text" name="author" placeholder="Autor ex: JK Roiling" onChange={handelChange} />
          <label htmlFor="author"
                 className="text-xl
                           absolute
                           left-1 -top-6
                           transition-all
                           font-semibold 
                           text-gray-900
                           peer-placeholder-shown:text-base
                           peer-placeholder-shown:text-gray-500
                           peer-placeholder-shown:top-3
                           peer-focus:-top-6 peer-focus:font-semibold
                           peer-focus:text-xl
                           peer-focus:text-gray-900">
                   Autor
                 </label>
        </div>
        <div className="flex flex-col mt-8 relative">
          <input id="publish" 
                 className="peer py-2 rounded-lg px-1 mt-1 border 
                 border-gray-500 focus:outline-none focus:ring-1 
                 focus:border-indigo-700 focus:ring-indigo-700 placeholder:transparent" value={formData.publicated} type="date" name="publicated" placeholder="Publicado ex: 2002" onChange={handelChange} />
          <label htmlFor="publish" 
                 className="text-xl
                 absolute
                 left-1 -top-6
                 transition-all
                 font-semibold 
                 text-gray-900
                 peer-placeholder-shown:text-base
                 peer-placeholder-shown:text-gray-500
                 peer-placeholder-shown:top-3
                 peer-focus:-top-6 peer-focus:font-semibold
                 peer-focus:text-xl
                 peer-focus:text-gray-900">
                 Publicado
            </label>
        </div>
        <div className="flex flex-col mt-8 relative">
          <textarea id="description" 
                 className="peer py-2 rounded-lg px-1 mt-1 border 
                 border-gray-500 focus:outline-none focus:ring-1 
                 focus:border-indigo-700 focus:ring-indigo-700 placeholder:transparent" value={formData.description} name="description" placeholder="Reseña ex: Es un libro de aventuras" onChange={handelChange} />
          <label htmlFor="description" 
                 className="text-xl
                 absolute
                 left-1 -top-6
                 transition-all
                 font-semibold 
                 text-gray-900
                 peer-placeholder-shown:text-base
                 peer-placeholder-shown:text-gray-500
                 peer-placeholder-shown:top-3
                 peer-focus:-top-6 peer-focus:font-semibold
                 peer-focus:text-xl
                 peer-focus:text-gray-900">
                 Reseña
            </label>
        </div>
        <div className="pt-3 flex justify-end items-center space-x-2">
          <button className="flex items-center justify-center space-x-1 bg-gray-400 focus:outline-none hover:bg-gray-500 hover:scale-105 text-gray-800 hover:text-gray-100 transition-all ease-in-out font-semibold rounded-xl px-3 py-2">
            <AiFillCheckCircle />
            <span>
              {
                !params.id ? "Guardar" : "Editar"}
            </span>
          </button>
          <Link href="/book_list" className="focus:outline-none">
            <button className="flex space-x-1 bg-gray-300 focus:outline-none hover:bg-gray-500 hover:scale-105 text-gray-800 hover:text-gray-100 transition-all ease-in-out font-semibold rounded-xl px-3 py-2">
              <span>Cancelar</span>
            </button>
          </Link>
        </div>
      </form>
    </motion.div>
  )
}

export default BookForm
