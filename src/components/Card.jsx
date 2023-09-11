'use client'
import Link from "next/link"
import { EditIcon, TrashIcon } from "./svg/AllSvg";

function Card({data, handleDelete}) {

    return (
      <>
      
        <div>
          <div className="bg-slate-400 sm:w-64 w-80 rounded-xl shadow-blue-500 shadow-lg hover:cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-150">
            {/* <div className="w-full h-1/2 rounded-xl"></div> para cunado se utilice una imagen */}
            <div className="m-2">
              <div className="text-gray-800 font-semibold pt-1">
                <h1 className="text-xl">{data.title}</h1>
              </div>
              <div className="text-gray-600 font-semibold pt-2">
                <h1>Author: {data.author}</h1>
              </div>
              <div className="text-gray-600 font-semibold">
                <h1>Published: {data.publicated}</h1>
              </div>
            </div>
            <div className="flex justify-end items-end p-1 space-x-1">
              <Link href={`/books/${data._id}`}>
                <button className="p-1"><EditIcon /></button>
              </Link>
              <button className="p-1" onClick={() => handleDelete(data._id)}><TrashIcon /></button>
            </div>
          </div>
        </div>
        
      </>
    )
  }
  
  export default Card