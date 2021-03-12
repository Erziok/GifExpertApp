import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import Footer from './components/Footer';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shingeki no Kyojin'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h2 className="text-white font-weight-bold">GifExpertApp</h2>
            
            <AddCategory setCategories={ setCategories }/>

            <hr />

            

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category = {category} 
                        />
                    ))
                }
            </ol>
            <hr></hr>
            <Footer 
                pie="Made With React - Erziok 2021"
            />
        </>
        
        
    )
}
