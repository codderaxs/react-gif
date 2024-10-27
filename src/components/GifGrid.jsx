import React, { useState,useEffect } from 'react';
//import {getGifs} from '../Helpers/getGifs';
import {GifItem} from '../components/GifItem';
import { useFecthGifs } from '../hooks/useFetchGifs';

export const GifGrid=({category})=>{
    
    const {images,isLoading} = useFecthGifs(category);
    
    /*const [images, setImages] = useState([]);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(()=>{
        getImages();
    },[]);*/

    return(
        <>
        <ol>
        <h3>{category}</h3>
        {isLoading && <h2>Cargando...</h2>}
            <div>{images.map(image=><GifItem key={image.id } {...image}/>)}</div>
        </ol>
        </>
    );
}