import React from 'react'
import { useState ,useEffect} from 'react'

const Search = ({ setFoodData}) => {
    const [query,setQuery]=useState("pizza")
    const URL = "https://api.spoonacular.com/recipes/complexSearch"
    const apiKey = "a042c645b66e42399868b661551fab66"
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`)
            const data = await res.json()
            console.log(data.results)
            setFoodData(data.results)
        }
    fetchFood()
},[query, setFoodData])
  return (
    <div>
        <input value={query} onChange={(e)=>setQuery(e.target.value)}></input>
    </div>
  )
}

export default Search