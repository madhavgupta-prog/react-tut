import axios from "axios"
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY


export const fetchPhotos = async (query, page=1, per_page=20) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`,{
        params: {
            query: query,
            page: page,
            per_page: per_page
        },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`
        }
    })
    return response.data.results
}
export const fetchVideos = async (query, per_page=20) => {
    const response = await axios.get(`https://api.pexels.com/videos/search`,{
        params: {
            query: query,
            per_page: per_page
        },
        headers: {
            Authorization: PEXELS_KEY
        }
    })
    return response.data.videos             
}