import React from 'react'
import { useDispatch} from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'
import { useSelector } from 'react-redux'

const Tabs = () => {
    const tabs= ['Photos', 'Videos']
    
    const dispatch= useDispatch()

    const activeTab= useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex justify-center '>
        {tabs.map((elem,idx)=>{
            return (
            <button 
                key={idx} 
                onClick={() => dispatch(setActiveTab(elem))} 
                className={` ${activeTab === elem ? 'bg-blue-600' : 'bg-blue-300'} text-white py-2 px-4 rounded-md  active:scale-95 cursor-pointer m-2`}
            >
            {elem}</button>
            )
        })}
    </div>
  )
}

export default Tabs
