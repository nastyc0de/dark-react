import React from 'react';
import Card from './Card';

const cardListData = [
{
    id:1,
    username:'@juan',
    icon:'images/icon-facebook.svg',
    followers:'1487',
    suscriber:'13'
}
]


const SectionOne = () => {
    return ( 
    <section className="top-section">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData)=><Card key={cardData.id} {...cardData}/>)
                }
            </div>
        </div>   
    </section> );
}
 
export default SectionOne;