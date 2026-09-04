import React from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {
    const[text, setText] = React.useState('')

    const dispatch= useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-center items-center gap-2 p-8'>
        <input required value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Search anything...' className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar