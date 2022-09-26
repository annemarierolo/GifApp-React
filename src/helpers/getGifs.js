export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zZXK1WEHnH818SH1WOePS49EWCEDILS2&q=${category}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        gifUrl: gif.images.downsized_medium.url
    }))
    
    return gifs;
    
  };