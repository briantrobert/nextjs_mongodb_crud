"use client"
import { useState, useContext } from "react"
import Link from "next/link"
import { CardViewSvg, EditIcon, TableViewSvg, TrashIcon } from "./svg/AllSvg"
import { motion, AnimatePresence } from "framer-motion"
import Card from "./Card"
import { useRouter } from "next/navigation"
import { Variants2 } from "@/helper/Variants"
import axios from "axios"
import { AppContext } from "@/context/StateProviders"

function ShowDataTypes({ data }) {

    const { showWays, setShowWays } = useContext(AppContext)


    const router = useRouter()

    const handleDelete = async (id) => {
        if (window.confirm("Esta seguro que quiere eliminar este libro")) {
            const { data } = await axios.delete(`/api/tasks/${id}`)

            // console.log(data.data[0])

        }
        router.refresh()
    }

    const [switchButton, setSwitchButton] = useState(false)

    const handleChangeView = () => {
        setShowWays(!showWays)
        // setSwitchButton(!switchButton)
    }

    return (
        <motion.div
            variants={Variants2}
            initial="hidden"
            animate="visible">
            <div className="w-full flex justify-end items-center">
                {/* <button className="py-2 px-1 border rounded-xl" onClick={() => setShowWays(!showWays)}>Cambiar vista</button> */}
                <div className="flex justify-center items-center mr-7">
                    <button className={`px-2 py-1 rounded-s-xl ${showWays ? `bg-gray-300 border border-gray-300` : `bg-gray-700`}`} disabled={!showWays} onClick={() => handleChangeView()}><CardViewSvg /></button>
                    <button className={`px-2 py-1 rounded-e-xl ${!showWays ? `bg-gray-300 border border-gray-300` : `bg-gray-700`} `} disabled={showWays} onClick={() => handleChangeView()}><TableViewSvg /></button>
                </div>
            </div>
            <AnimatePresence>
                {
                    showWays &&
                    <motion.div className="p-5 absolute w-full"
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{duration: 0.5}}
                        exit={{ opacity: 0 }}>
                        <div className="overflow-auto rounded-lg shadow-md shadow-gray-400">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b-2 border-gray-200">
                                    <tr className="p-3 bg-gray-700">
                                        <th className="p-3 font-bold tracking-wide text-left">Título</th>
                                        <th className="p-3 font-bold tracking-wide text-left">Autor</th>
                                        <th className="w-24 p-3 font-bold tracking-wide text-left">Publicado</th>
                                        <th className="w-20 p-3 font-bold tracking-wide text-left">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {
                                        data.map((m, index) => (

                                            <tr key={m._id} className={`${index % 2 == 0 ? 'bg-white' : 'bg-gray-200'}`}>
                                                <td className="p-3 text-gray-700 whitespace-nowrap">{m.title}</td>
                                                <td className="p-3 text-gray-700 whitespace-nowrap">{m.author}</td>
                                                <td className="p-3 text-gray-700 whitespace-nowrap">{m.publicated}</td>
                                                <td className="border rounded-xl whitespace-nowrap">
                                                    <div className="flex justify-end items-end space-x-2">
                                                        <Link href={`/books/${m._id}`}>
                                                            <button className="p-1"><EditIcon /></button>
                                                        </Link>
                                                        <button className="p-1" onClick={() => handleDelete(m._id)}><TrashIcon /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                    // :
                    // <motion.div 
                    // exit={{opacity: 0, duration: 1}}
                    // className="grid lg:grid-cols-4 gap-4 pt-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
                    //     {data.map(b => (
                    //         <Card key={b._id} data={b} handleDelete={handleDelete}/>
                    //     ))}
                    // </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>

                {
                    !showWays &&
                    <motion.div
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{duration: 0.5}}
                        exit={{ opacity: 0}}
                        className="absolute w-full pb-5 grid lg:grid-cols-4 gap-4 pt-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
                        {data.map(b => (
                            <Card key={b._id} data={b} handleDelete={handleDelete} />
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
            {/* <Modal showModal={showModal} onClose={setShowModal} size="sm">
                <DeleteBook data={data} onClose={setShowModal} />
            </Modal> */}
        </motion.div>
    )
}

export default ShowDataTypes
