import { useState } from "react";
//Esto lo podemos llamar asi por el index.js que se creo en al carpeta components
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["panda"]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //Esta es la forma de hacerlo recibiendo el elemento del hijo y agregarlo en el padre
        onNewCategory={onAddCategory}
        //Esta es la forma de hacerlo agregando el elemento desde el hijo
        // setCategories = {setCategories}
      />
        {categories.map((category) => (
            <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
