import Link from "next/link"
import { AddingSvg } from "./svg/AllSvg"

function Navbar() {


    return (
        <nav className="sticky z-20 top-0 bg-gray-700 backdrop-blur-sm py-2">
            <div className="container flex justify-between items-center px-10 md:px-0 mx-auto">
                <Link href="/">
                    <h1 className="text-lg font-bold font-sans text-gray-200">
                        Tus libros favoritos están aquí
                    </h1>
                </Link>
                <ul className="pr-3">
                    <li>
                        
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar