import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import Img1 from '../images/img-3.jpg';
import Img2 from '../images/tatooine.jpeg';
import Img3 from '../images/img-5.jpg';
import Img4 from '../images/img-4.jpg';
import Img5 from '../images/img-2.jpg';
import Img6 from '../images/img-1.jpg';
import Img7 from '../images/STRWRS.jpeg';
import Img8 from '../images/LOTR.jpeg';


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
                    <ul className="cards__items">
                        <CardItem
                            src={Img7}
                            text="Escape the imperials with Han Solo"
                            label='Adventure'
                            path="/services"
                        />
                        <CardItem
                            src={Img8}
                            text="Get corrupted by wearing a ring"
                            label='Adventure'
                            path="/services"
                        />
                        <CardItem
                            src={Img6}
                            text="Hang out with the cast of Madagascar"
                            label='Family'
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards

