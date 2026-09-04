import { Bookmark } from 'lucide-react'
import React from 'react'

const ResultCard = ({ item }) => {
    const addToCollection = (item) => {
        const oldData = JSON.parse(localStorage.getItem('collection')) || []
        localStorage.setItem('collection', JSON.stringify([...oldData, item]))
    }
  return (
    <div className=' h-50 w-60 relative  rounded-xl transition-transform transform hover:scale-102 shadow-lg overflow-hidden'>
        <a href={item.link} target='_blank' rel='noopener noreferrer' className='block h-full w-full'>
            {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.url} alt="" /> : <video className='h-full w-full object-cover object-center' src={item.url} autoPlay loop muted />}
        </a>
        <div className='absolute bottom-0 left-0 right-0 text-white bg-linear-to-t from-black to-transparent p-2'>
            <h2 className='text-sm h-[10%] font-thin capitalize'>{item.title}</h2>
        </div>
        <div className='absolute top-0 right-0 bg-black opacity-50 text-amber-50 m-1 rounded-full hover:opacity-80 transition-opacity p-1 cursor-pointer'>
            <button onClick={() => addToCollection(item)} className='cursor-pointer align-middle active:scale-90'><Bookmark/></button>
        </div>
    </div>
  )
}

export default ResultCard
