import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    //Esto es un custon Hook que reemplaza todo el codigo que esta comentado abajo
    const {gifs, isLoading} = useFetchGifs(category);

//     const [gifs, setGifs] = useState([]);

//     const getAllGifs = async() => {
//         const newGifs = await getGifs(category);
//         setGifs(newGifs);
//     }

//   useEffect(() => {
//     //Esto es otra forma de hacer en vez de crear la funcion getAllGifs
//     // getGifs(category)
//     //     .then(newGifs => setGifs(newGifs));
//     getAllGifs();
//   }, [])

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {gifs.map((gif) => (
            //Esto es una forma mas optima de hacerlo
            //se le estan enviando todos los elementos que hay dentro del arreglo
            <GifItem key={gif.id} {...gif} />

            //Esta de abajo es la forma convencional pero no tan optima porque si es arreglo 
            //tuviese muchas variables se tendrian que pasar una a una
            //<GifItem key={id} title={title} gifUrl={gifUrl} />
        ))}
      </div>
    </>
  );
};
