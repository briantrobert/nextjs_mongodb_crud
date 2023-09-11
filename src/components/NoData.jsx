import { motion } from "framer-motion"

function NoData() {
  return (
    <motion.div
     initial={{opacity: 0}}
     animate={{opacity: 1}}
     transition={{duration: 1}}
     className='w-full h-[calc(100vh-7rem)] flex justify-center items-center'>
        <p className='text-2xl font-semibold text-gray-800'>No hay datos que mostrar</p>
    </motion.div>
  )
}

export default NoData
