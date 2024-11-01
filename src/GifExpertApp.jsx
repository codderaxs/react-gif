import React, { useState } from 'react';
import {AddCategory,GifGrid} from './components';

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Goku']);
    
    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;
        setCategories(cat=>[...cat,newCategory]);
    }
    
    return(
        <>  
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={value=>onAddCategory(value)}/>
            {categories.map(category=><GifGrid key={category} category={category}/>)}    
        </>
    );
}