import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleAdd = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //Asi se hace enviandole el valor al padre
        onNewCategory(inputValue.trim());
        //Asi se hace agregando el valor desde el hijo
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleAdd} type="text" placeholder="Search gifs" value={inputValue}/>
    </form>
    
  )
}
