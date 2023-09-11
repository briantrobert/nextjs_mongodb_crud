"use client"
import ShowDataTypes from './ShowDataTypes'
import NoData from './NoData'
import { useEffect, useState } from 'react'
import StateProviders from '@/context/StateProviders'

function PageRenderer({b}) {

    // const [realData, setRealData] = useState(b)

    useEffect(() => {
        console.log(b)
    }, [b])

  return (
    <div>
       {
        b.length !== 0 ? <ShowDataTypes data={b} /> : <NoData />
      }
    </div>
  )
}

export default PageRenderer
