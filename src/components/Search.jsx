import React from 'react'
import { useState ,useEffect} from 'react'
import styles from './search.module.css';

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
    <div className={styles.searchContainer} >
        <input className={styles.input} value={query} onChange={(e)=>setQuery(e.target.value)}></input>
    </div>
  )
}

export default Search