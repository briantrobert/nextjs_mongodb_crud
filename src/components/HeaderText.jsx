"use client"
import { motion } from "framer-motion"
import { Variants1 } from "@/helper/Variants"

function HeaderText() {
  return (
    <div className="pt-6 pl-10 flex w-full">
       <motion.div 
        variants={Variants1}
        initial="hidden"
        animate="visible">
        <h1 className="text-white text-3xl font-semibold">Añade tu libro favorito</h1>
      </motion.div>
    </div>
  )
}

export default HeaderText
