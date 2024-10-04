import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

// * Un hook no es más que una función
const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

  return {
    images: images,
    isLoading: isLoading
  }

}

export default useFetchGifs
