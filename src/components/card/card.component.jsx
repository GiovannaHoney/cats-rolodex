import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} />
        <h2> { props.monster.name}</h2>
        <p>Email : {props.monster.email}</p>
        <p>Telephone: {props.monster.phone}</p>
    </div>
)