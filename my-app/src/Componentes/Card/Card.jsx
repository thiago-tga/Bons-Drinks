import React from 'react';
import './card.css';

const Card = (props) => {
    return (
      <div className='cardGrid'>
        <img className='cardImg' src={props.img} alt="drink randomico" />
        <div className='informations'>
            <h2 className="cardHeading">Nome:</h2>
            <p className='cardText'>{props.name}</p>

            <h2 className="cardHeading">Categoria: </h2>
            <p className='cardText'>{props.category}</p>

            <h2 className="cardHeading">Copo: </h2>
            <p className='cardText'>{props.glass}</p>

            <h2 className="cardHeading">Instruções: </h2>
            <p className='cardText'>{props.instructions}</p>

        </div>

      </div>
    );
  };
  
  export default Card;