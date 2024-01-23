import Link from 'next/link'
import React from 'react'


const Nav = () => {
  return (
    <div className='flex gap-5 py-5 px-5 text-center text-2xl bg-yellow-500 text-black'>
        <Link href="/">home</Link>
        <Link href="/name">name</Link>
        <Link href="/name/adress">adress</Link>
        <Link href="/name/adress/about-us">about-us</Link>



    </div>
  )
}

export default Nav