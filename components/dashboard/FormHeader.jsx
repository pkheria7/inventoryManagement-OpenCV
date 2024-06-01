import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FormHeader({title,href}) {
  return (
    <div className="flex items-center 
    justify-between bg-white py-3 px-16">
      <h2 className='text-xl fonts-semibold'>{title}</h2>
      <Link href={href}>
      <XIcon/>
      </Link>
    </div>
  )
}