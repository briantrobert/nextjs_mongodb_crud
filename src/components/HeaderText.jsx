"use client"
import { motion } from "framer-motion"
import { Variants1 } from "@/helper/Variants"

function HeaderText() {
  return (
    <div className="pb-5 md:pb-0 pt-6 pl-10 flex w-full">
       <motion.div 
        variants={Variants1}
        initial="hidden"
        animate="visible">
        <h1 className="text-gray-700 text-3xl font-semibold">Añade tus libros favoritos</h1>
      </motion.div>
    </div>
  )
}

export default HeaderText
