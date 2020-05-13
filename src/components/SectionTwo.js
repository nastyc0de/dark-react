import React from 'react';

const SectionTwo = () => {
    return (
        <section className="overview-section">
        <div className="wrapper">
            <div className="overview-title">
                <h1>Overview - Today</h1>
            </div>
            <div className="grid">
                <article className="card-overview">
                    <p className="card-o-title">Page Views</p>
                    <p className="card-o-icon"><img src="images/icon-facebook.svg" alt=""/></p>
                    <p className="card-o-number">87</p>
                    <p className="card-o-data card-o-positive-data"><img src="images/icon-up.svg" alt=""/>3%</p>
                </article>
                <article className="card-overview">
                    <p className="card-o-title">Likes</p>
                    <p className="card-o-icon"><img src="images/icon-facebook.svg" alt=""/></p>
                    <p className="card-o-number">52</p>
                    <p className="card-o-data card-o-negative-data"><img src="images/icon-down.svg" alt=""/>2%</p>
                </article>
                <article className="card-overview">
                    <p className="card-o-title">Likes</p>
                    <p className="card-o-icon"><img src="images/icon-instagram.svg" alt=""/></p>
                    <p className="card-o-number">5462</p>
                    <p className="card-o-data card-o-positive-data"><img src="images/icon-up.svg" alt=""/>2257%</p>
                </article>
                <article className="card-overview">
                    <p className="card-o-title">Profile Views</p>
                    <p className="card-o-icon"><img src="images/icon-instagram.svg" alt=""/></p>
                    <p className="card-o-number">52k</p>
                    <p className="card-o-data card-o-positive-data"><img src="images/icon-up.svg" alt=""/>1375%</p>
                </article>
                <article className="card-overview">
                    <p className="card-o-title">Retweets</p>
                    <p className="card-o-icon"><img src="images/icon-twitter.svg" alt=""/></p>
                    <p className="card-o-number">117</p>
                    <p className="card-o-data card-o-positive-data"><img src="images/icon-up.svg" alt=""/>303%</p>
                </article>
                <article className="card-overview">
                    <p className="card-o-title">Likes</p>
                    <p className="card-o-icon"><img src="images/icon-twitter.svg" alt=""/></p>
                    <p className="card-o-number">507</p>
                    <p className="card-o-data card-o-positive-data"><img src="images/icon-up.svg" alt=""/>553%</p>
                </article>
                <article className="card-overview">
                    <p className="card-o-title">Likes</p>
                    <p className="card-o-icon"><img src="images/icon-youtube.svg" alt=""/></p>
                    <p className="card-o-number">107</p>
                    <p className="card-o-data card-o-negative-data"><img src="images/icon-down.svg" alt=""/>19%</p>
                </article>
                <article className="card-overview">
                    <p className="card-o-title">Total Views</p>
                    <p className="card-o-icon"><img src="images/icon-youtube.svg" alt=""/></p>
                    <p className="card-o-number">1407</p>
                    <p className="card-o-data card-o-negative-data"><img src="images/icon-down.svg" alt=""/>12%</p>
                </article>
            </div>
        </div>
    </section>
    );
}
 
export default SectionTwo;