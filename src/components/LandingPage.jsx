'use client'
import Image from "next/image"
import Link from "next/link"
import { phrases } from "@/data/phrases"
import { motion } from 'framer-motion'
import { useState, useEffect } from "react"
import { fadeInAnimationVariantsSide } from "@/helper/Variants"

function LandingPage() {

  const [prha, setPrha] = useState(0);

  const words = Array.from(phrases[prha].phrases)
  console.log(words)
  const texts = ['', '', '','', '', '', '',''];
  const [mount, setMount] = useState(true);

  const Desmount = () => {
    setTimeout(() => {
      setMount(false)
    }, 15000);
  }

  useEffect(() => {
    setTimeout(() => {
      setPrha((prha + 1) % texts.length);
      setMount(true)
    }, 20000);
    Desmount()
  }, [prha])


  return (
    <div className="flex w-full flex-col">
      <div className="block md:hidden fixed w-screen h-screen bg-gray-200">

      </div>
      <div className="hidden md:block fixed w-screen h-screen">
        <Image
          src="/img/books.jpg"
          alt=""
          fill
          objectFit="cover"
        />
      </div>
      <div className="fixed backdrop-blur-md bg-white/30 w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full">
          <div className="text-5xl text-gray-700 md:text-6xl font-bold text-center p-5 md:text-start lg:w-3/4 md:mt-5 rounded-lg mb-5">
            <h1 >Los Libros son un refugio,un paraiso</h1>
            <h1 >en medio del caos.</h1>
          </div>
          <div className="hidden md:flex flex-col text-sm text-center font-semibold lg:text-lg w-1/2 tracking-wider pl-10 h-10 items-center justify-center">
            {/* <h1>"Aqui va la frase famosa del famoso en este caso Ceneca o Marco Aurelio"</h1> */}
            <div className="h-full w-full flex text-center">
            {mount && words.map((e, index) => (
              <motion.h1 key={index+1}
                variants={fadeInAnimationVariantsSide}
                initial="initial"
                whileInView="animate"
                // viewport={{
                //   once: true,
                // }}
                custom={index}>
                {e === " " ? "\u00A0" : e}
              </motion.h1>
            ))}
            </div>
            {
              mount && <div><h1>{phrases[prha].author}</h1></div>
              
            }
            {/* <h1>Aqui va la frase famosa del famoso en este caso Ceneca o Marco Aurelio</h1>
             <h1>Aqui va la frase famosa del famoso en este caso Ceneca o Marco Aurelio</h1> */}
          </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center mt-8 sm:mt-28 mb-5 pb-5">
          <div className="pb-5 md:w-3/4 md:flex items-center justify-center md:justify-start md:pl-10">
            <Link href="/book_list">
              <button className="py-2 px-2 lg:py-3 lg:px-3 hover:bg-gray-500 hover:text-gray-200 hover:-translate-y-1 bg-gray-200 text-gray-800 border-2  border-gray-800 font-bold rounded-lg lg:text-lg shadow-lg shadow-gray-700 transition-all ease-in-out">Crea tu lista favorita</button>
            </Link>
          </div>
          <div className="md:w-3/4">
            <div className="pr-5">
              <div className="p-2 text-center font-semibold text-lg">
                <h1>Los 10 mejores libros de la historia de la literatura universal</h1>
              </div>
              <div className="p-3 border bg-gray-400 border-gray-900 rounded-lg h-28 overflow-y-auto">
                <h1>1. Cien años de soledad, de Gabriel García Márquez.</h1>
                <h1>2. El señor de los anillos (Trilogía), de J. R. R. Tolkien.</h1>
                <h1>3. 1984, de George Orwell.</h1>
                <h1>4. Un mundo feliz, de Aldous Huxley.</h1>
                <h1>5. Orgullo y prejuicio, de Jane Austen.</h1>
                <h1>6. Crimen y castigo, de Fiódor Dostoyevski.</h1>
                <h1>7. Lolita, de Vladimir Nabokov.</h1>
                <h1>8. Ulises, de James Joyce.</h1>
                <h1>9. Madame Bovary, de Gustave Flaubert.</h1>
                <h1>10. En busca del tiempo perdido, de Marcel Proust.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
