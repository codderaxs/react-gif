import {useState,useEffect} from 'react';
import {getGifs} from '../Helpers/getGifs';



export const useFecthGifs = (category)=>{
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{
        console.log(category)
        getImages();
    },[]);

    return {
        images: images,
        isLoading:isLoading
    }
}