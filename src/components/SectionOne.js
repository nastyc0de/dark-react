import React from 'react';
import Card from './Card';

const cardListData = [
    {
        id:1,
        username:'@juan',
        icon:'images/icon-facebook.svg',
        followers:'1487',
        suscriber:'13',
        socialNetwork:'facebook'
    },
    {
        id:2,
        username:'@juandice',
        icon:'images/icon-twitter.svg',
        followers:'17k',
        suscriber:'20',
        socialNetwork:'twitter'
    },
    {
        id:3,
        username:'@eljuan',
        icon:'images/icon-instagram.svg',
        followers:'147k',
        suscriber:'1330',
        socialNetwork:'instagram'
    },
    {
        id:4,
        username:'el codigo de juan',
        icon:'images/icon-youtube.svg',
        followers:'16k',
        suscriber:'-13',
        socialNetwork:'youtube'
    },
    

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