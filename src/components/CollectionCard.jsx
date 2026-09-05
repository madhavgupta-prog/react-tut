import { Cross, Delete, X } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCollection, removetoast } from '../redux/features/collectionSlice'
const CollectionCard = ({item}) => {
    const dispatch = useDispatch()
    const remove = (item) => {
        dispatch(removeFromCollection(item))
        dispatch(removetoast())
    }
  return (
    <div className=' h-50 w-60 relative  rounded-xl transition-transform transform hover:scale-102 shadow-lg overflow-hidden'>
        <a href={item.link} target='_blank' rel='noopener noreferrer' className='block h-full w-full'>
            {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.url} alt="" /> : <video className='h-full w-full object-cover object-center' src={item.url} autoPlay loop muted />}
        </a>
        <div className='absolute bottom-0 left-0 right-0 text-white bg-linear-to-t from-black to-transparent p-2'>
            <h2 className='text-sm h-[10%] font-thin capitalize'>{item.title}</h2>
        </div>
        <div className='absolute top-0 right-0 text-red-600 bg-black opacity-50 hover:bg-red-600 hover:text-white hover:opacity-100 m-1 rounded-full transition-opacity cursor-pointer'>
            <button onClick={() => remove(item)} className='cursor-pointer align-middle active:scale-90 opacity-100 font-bold'><X/></button>
        </div>
    </div>
  )
}

export default CollectionCard
