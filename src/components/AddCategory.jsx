import { useState } from "react";

export const AddCategory = ({onNewCategory})=>{
    
    const [inputValue,setInputValue] = useState('');
    
    const onInputChange = event=>{
        setInputValue(event.target.value);
    }
    
    const onSubmitForm = e =>{
        e.preventDefault();

        const inputFormatted = inputValue.trim();
        if(inputFormatted.length<2) return;
        //onAddCategories(categories=>[...categories,inputValue]);
        onNewCategory(inputFormatted);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input 
            type="text" 
            placeholder="Buscar Gifs" 
            value = {inputValue}
            onChange={onInputChange}
            />
        </form>
    );
}