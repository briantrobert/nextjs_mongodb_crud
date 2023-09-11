import Link from "next/link"
import { AddingSvg } from "./svg/AllSvg"

function Navbar() {


  return (
      <nav className="sticky z-20 top-0 bg-gray-700 backdrop-blur-sm py-2">
          <div className="container flex justify-between items-center px-10 md:px-0 mx-auto">
                  <h1 className="text-lg font-bold font-sans text-gray-200">
                      CRUD Next.js 13 & Mondo
                  </h1>
              <ul className="pr-3">
                  <li>
                      <Link href="/books/new">
                          {/* <h1 className="text-lg font-bold font-sans text-orange-500">
                              Añadir nuevo libro
                          </h1> */}
                          <button className="p-1 rounded-full hover:scale-110 transition-all ease-in-out"><AddingSvg /></button>
                      </Link>
                  </li>
              </ul>
          </div>
      </nav>
  )
}

export default Navbar