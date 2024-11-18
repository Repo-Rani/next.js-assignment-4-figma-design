import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='w-[283px] h-[24px] absolute top-[66px] left-[1088px]'>
    <ul className='flex items-center justify-end gap-x-8  '>
        <li><Link href="#" className="  font-inter font-medium text-[20px] leading-[24.2px]">Works</Link></li>
        <li><Link href="#" className="  font-inter font-medium text-[20px] leading-[24.2px]">Blog</Link></li>
        <li><Link href="#" className=" font-inter font-medium text-[20px] leading-[24.2px]">Contact</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar