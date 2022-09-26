import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllGifs = async() => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    }

  useEffect(() => {
    //Esto es otra forma de hacer en vez de crear la funcion getAllGifs
    // getGifs(category)
    //     .then(newGifs => setGifs(newGifs));
    getAllGifs();
  }, [])

  return {
    gifs,
    isLoading
  }
}
