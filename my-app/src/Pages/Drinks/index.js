import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './drinks.css';
import DrinksDaGalera from './drinksDaGalera';
import ProcureDrink from './procureDrink'

const Drinks = () => {
    return (
        <div className='drinksGrid'>
            <section className='titleDrinks' >
                <h1>Drinks</h1>
            </section>
            <section className='buttonNavLink'>
                <NavLink to='/drinks/random'><button className='button'>Ganhe um drink</button></NavLink>
                <NavLink to='/drinks/buscar'><button className='button'>Procure um drink</button></NavLink>
            </section>
            <section className='contentDrink'>
                <Switch>
                    <Route path='/drinks/random'>
                        <DrinksDaGalera/>
                    </Route>
                    <Route path='/drinks/buscar'>
                        <ProcureDrink/>
                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default Drinks
