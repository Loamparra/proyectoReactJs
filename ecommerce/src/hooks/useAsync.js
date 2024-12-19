import { useEffect, useState } from "react"


export const useAsync = (asyncFunction, dependencies = []) =>{
    
    const[data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [rror, setError] = useState(null)
    
    useEffect() => {
        setLoading(true)
        asyncFunction()
        .then ((data)=>{
            setData(data)
        })
        .catch((error)=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, dependencies)
    
    return{
        data,
        loading,
        error
    }
}