import React from 'react'
import { useState } from 'react'
import { GifGrid,AddCategory } from './components'

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch','Goku'])

    const onAddCatehory = ()=>{
        setCategories( category => [...category, 'Te buscare Maria']);

    }


    const addNewCategory = (element) => {

        if (categories.includes(element)) return ;
        setCategories([element, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory = {(event) => addNewCategory(event)} />

            <button onClick={onAddCatehory}>Add Category</button>

                {
                    categories.map( (category) => (
                        <GifGrid 
                            key={category} 
                            category ={category} 
                        />
                    ))
                }
        </>
    )
}

export default GifExpertApp
