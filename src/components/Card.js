import React from 'react';

const Card = ({username, icon, followers, suscriber, socialNetwork}) => {
    const cardClass = `card card-${socialNetwork}`;
    return (
        <article className={cardClass}>
                    <p className="card-title">
                        <img src={icon} alt=""/>
                        {username}
                    </p>
                    <p className="follower">
                        <span className="follower-number">{followers}</span>
                        <span className="follower-title">Followers</span>
                    </p>
                    <p className="follower-suscriber"><img className="follower-icon" src="images/icon-up.svg" alt=""/>{suscriber} today</p>
                </article>
    );
}
 
export default Card;