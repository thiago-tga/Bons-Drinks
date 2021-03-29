import React,{useState } from 'react';
import searchDrinks from '../../Componentes/Model/searchDrinkApi';
import Card from '../../Componentes/Card/Card';

const ProcureDrink = () => {
    const [input, setInput] = useState("");
    const [reqDrinks,setReqDrinks] = useState("");

    const type = async (drinkValue) =>{
        const drink = await setInput(drinkValue.target.value)
    }
    const search = async (drink) =>{
        const req = await searchDrinks(input);
        setReqDrinks(req.drinks[0])
    }

    return (
        <div>
            <label>Qual o Drink?</label>
            <input type='text' onChange={type}></input>
            <button className='button' onClick={search}>Buscar</button>
            <Card img={reqDrinks.strDrinkThumb} name={reqDrinks.strDrink} glass={reqDrinks.strGlass} category={reqDrinks.strCategory} instructions={reqDrinks.strInstructions} />
        </div>
    )
}

export default ProcureDrink
