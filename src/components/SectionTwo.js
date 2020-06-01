import React from 'react';
import OverviewCard from './OverviewCard'

const ListDataInfo =[
    {
        id:1,
        icon:"images/icon-facebook.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    },
    {
        id:2,
        icon:"images/icon-facebook.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    },
    {
        id:3,
        icon:"images/icon-twitter.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    },
    {
        id:4,
        icon:"images/icon-twitter.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    },
    {
        id:5,
        icon:"images/icon-instagram.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    },
    {
        id:6,
        icon:"images/icon-instagram.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    },
    {
        id:7,
        icon:"images/icon-youtube.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    },
    {
        id:8,
        icon:"images/icon-youtube.svg",
        title:'Page Views',
        suscriber: '87',
        info_suscriber:'3%'
    }
]
const SectionTwo = () => {
    return (
        <section className="overview-section">
        <div className="wrapper">
            <div className="overview-title">
                <h1>Overview - Today</h1>
            </div>
            <div className="grid">
                {
                    ListDataInfo.map((DataInfo)=><OverviewCard 
                    key={DataInfo.id}{...DataInfo}/>)
                }
                
            </div>
        </div>
    </section>
    );
}
 
export default SectionTwo;