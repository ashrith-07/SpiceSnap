import React, { useEffect, useState } from 'react'
import styles from './fooddetails.module.css'
import ItemList from './ItemList'
const FoodDetails = ({ foodId }) => {

    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)
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
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⏱️{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        👨‍👩‍👧‍👦<strong>Serves:{food.servings}</strong>
                    </span>
                    <span>
                        <strong>{food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}</strong>
                    </span>
                </div>
                <div>
                    $<span><strong>{(food.pricePerServing / 100).toFixed(2)}</strong></span>
                </div>
                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading}/>
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            food.analyzedInstructions[0].steps.map((step, index) => (<li key={index}>{step.step}</li>))
                        )}
                    </ol>
                </div>
            </div>
        </div>
            )
}

            export default FoodDetails