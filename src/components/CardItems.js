import React from 'react'
import { Link } from 'react-router-dom';

function CardItems() {
    returns(
        <>
        <li className="cards__item">
            <Link className="cards__item__link">
                <figure className="cards__item__pics-wrap">   
                    <img src="/" alt="Travel Image" className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'/>
                </div>
            </Link>
        </li>
        </>

    )
}

export default CardItems;