import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import Img1 from '../images/img-3.jpg';
import Img2 from '../images/tatooine.jpeg';
import Img3 from '../images/img-1.jpg';


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={Img1}
                            text="Explore the uncharted planets in the CI-13 solar system"
                            label='Adventure'
                            path="/services"
                        />
                                                <CardItem
                            src={Img2}
                            text="Connect with The Force on Tatooine"
                            label='Adventure'
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
