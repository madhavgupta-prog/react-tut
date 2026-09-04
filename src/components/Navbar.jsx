import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center bg-blue-300 text-white'>
                <h1 className='text-2xl font-bold px-10 py-4 bg-blue-300'>Media Search</h1>
                <div className='flex gap-4 px-10 '>
                    <Link to="/" className='p-2 rounded active:scale-95 bg-blue-600'>Home</Link>
                    <Link to="/collection" className=' p-2 rounded active:scale-95 bg-blue-600'>Collection</Link>
                </div>
            </div>
    </div>
  )
}

export default Navbar
