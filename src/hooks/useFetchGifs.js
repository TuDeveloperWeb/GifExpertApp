import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) =>{

    const [images,setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    //useEffect necesita dos parametros el primero es una funcion a ejecutar, 
    //el otro parametro es una variable lo q se va a modificar para activar la funcion 
    useEffect(() => {
        getImages();
    }, [])
    


    return {
        images,
        isLoading
    }
}