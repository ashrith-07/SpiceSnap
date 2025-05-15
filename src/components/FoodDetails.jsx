import React, { useEffect, useState } from 'react'

const FoodDetails = ({ foodId }) => {

    const [food, setFood] = useState({})
    const [isLoading,setIsLoading]=useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const apiKey = "a042c645b66e42399868b661551fab66"

    useEffect(() => {
        async function fetchRecipe() {
            const res = await fetch(`${URL}?apiKey=${apiKey}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            setIsLoading(false)
        }
        fetchRecipe()
    }, [foodId, URL])
    return (
        <div>
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt="" />
                <div>
                <span>
                    <strong>⏱️{food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                    👨‍👩‍👧‍👦<strong>Serves:{food.servings}</strong>
                </span>
                <span>
                    {food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
                </span>
                </div>
                <div>
                    $<span>{(food.pricePerServing/100).toFixed(2)}</span>
                </div>
            </div>
            <div>
                <h2>Instructions</h2>
                {isLoading?(
                    <p>Loading...</p>
                ):(
                    food.analyzedInstructions[0].steps.map((step,index)=>(<li key={index}>{step.step}</li>))
                )}
            </div>
        </div>
    )
}

export default FoodDetails