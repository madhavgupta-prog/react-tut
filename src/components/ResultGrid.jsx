import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setQuery, setResults, setLoading, setError } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'
const ResultGrid = () => {
    const dispatch = useDispatch()

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(() => {
        if (!query.trim()) return
        const getData = async () => {
            dispatch(setLoading())
            try {
                let data=[];
                if (activeTab == 'Photos') {
                    let response = await fetchPhotos(query)
                    data = response.map((item)=>({
                        id: item.id,
                        type: 'photo',
                        url: item.urls.full,
                        thumbnail: item.urls.small,
                        title: item.alt_description,
                        link: item.links.html
                    }))
                }
                if (activeTab == 'Videos') {
                    let response = await fetchVideos(query)
                    data = response.map((item)=>({
                        id: item.id,
                        type: 'video',
                        url: item.video_files[0].link,
                        title: item.user.name,
                        thumbnail: item.image,
                        link: item.url
                    }))
                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message || 'Something went wrong'))
            }
        }
        getData()
    }, [query, activeTab,dispatch])

    if (loading) return <p className='text-center text-gray-500'>Loading...</p>
    if (error) return <p className='text-center text-red-500'>{error}</p>

    return (
        <div className='flex flex-wrap justify-center gap-4 p-4 overflow-auto px-10'>
            {results.map((item, idx) => {
                return <div key={idx}>
                        <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid
