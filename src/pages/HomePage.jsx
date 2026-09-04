import React from 'react'
import ResultGrid from "../components/ResultGrid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"
import { useSelector } from 'react-redux'
const HomePage = () => {
    const {query} = useSelector((state)=>state.search)
    return (
        <div className="flex flex-col min-h-screen bg-blue-50 gap-2">
            <SearchBar />
            {query && <Tabs />}
            {query && <ResultGrid />}
        </div>
    )
}

export default HomePage
