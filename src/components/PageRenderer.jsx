"use client"
import ShowDataTypes from './ShowDataTypes'
import NoData from './NoData'
import { useEffect, useState } from 'react'
import StateProviders from '@/context/StateProviders'
import Link from 'next/link'
import { AddingSvg } from './svg/AllSvg'

function PageRenderer({ b }) {

  // const [realData, setRealData] = useState(b)

  useEffect(() => {
    console.log(b)
  }, [b])

  return (
    <div>
      <div className='pt-2 pb-3 pl-8'>
        <Link href="/books/new">
          {/* <h1 className="text-lg font-bold font-sans text-orange-500">
                              Añadir nuevo libro
                          </h1> */}
          <button className="p-1 bg-gray-700 rounded-lg hover:scale-110 transition-all ease-in-out"><AddingSvg /></button>
        </Link>
      </div>
      {
        b.length !== 0 ? <ShowDataTypes data={b} /> : <NoData />
      }
    </div>
  )
}

export default PageRenderer
