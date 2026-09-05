import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import {clearCollection} from '../redux/features/collectionSlice'
const CollectionPage = () => {
    const collection = useSelector((state)=>state.collection.items)
    const dispatch = useDispatch()
  return (
    <div className='flex flex-col min-h-screen bg-blue-50 gap-2'>
        {collection.length>0?<div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold px-10 py-4  text-gray-600'>My Collection</h1>
            <button onClick={() => dispatch(clearCollection())} className='bg-red-500 text-white py-2 px-4 mx-10 rounded active:scale-95 cursor-pointer'>
                Clear all
            </button>
        </div>:null}
        <div className='flex flex-wrap justify-start gap-4 p-5 overflow-auto px-10'>
            {collection.length === 0 ? <p className='text-center text-gray-500 text-xl '>No items in collection</p> : null}
            {collection.map((item, idx) => {
                return <div key={idx}>
                    <CollectionCard item={item}/>
                </div>
            })}
        </div>
    </div>
  )
}

export default CollectionPage
