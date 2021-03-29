import React,{ useEffect, useState } from 'react';
import randrinks from '../../Componentes/Model/randomDrinkApi';
import Card from '../../Componentes/Card/Card'


const DrinksDaGalera = () => {
    const [reqDrinks, setReqDrinks] = useState([]);

    const click = async () =>{
        const req = await randrinks();
        setReqDrinks(req.drinks[0])
    }

    useEffect(()=>{
        click()
    },[])
    return (
        <div>
            <button className='button' onClick={click}>Renove o drink</button>
            <Card img={reqDrinks.strDrinkThumb} name={reqDrinks.strDrink} glass={reqDrinks.strGlass} category={reqDrinks.strCategory} instructions={reqDrinks.strInstructions} />           
        </div>
    )
}


export default DrinksDaGalera;