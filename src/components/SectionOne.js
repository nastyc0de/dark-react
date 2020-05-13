import React from 'react';

const SectionOne = () => {
    return ( 
    <section className="top-section">
        <div className="wrapper">
            <div className="grid">
                <article className="card card-facebook">
                    <p className="card-title">
                        <img src="images/icon-facebook.svg" alt=""/>
                        @nathanf
                    </p>
                    <p className="follower">
                        <span className="follower-number">1987</span>
                        <span className="follower-title">Followers</span>
                    </p>
                    <p className="follower-suscriber"><img className="follower-icon" src="images/icon-up.svg" alt=""/>12 today</p>
                </article>
                <article className="card card-twitter">
                    <p className="card-title">
                        <img src="images/icon-twitter.svg" alt=""/>
                        @nathanf
                    </p>
                    <p className="follower">
                        <span className="follower-number">1044</span>
                        <span className="follower-title">Followers</span>
                    </p>
                    <p className="follower-suscriber"><img className="follower-icon" src="images/icon-up.svg" alt=""/>99 today</p>
                </article>
                <article className="card card-instagram">
                    <p className="card-title">
                        <img src="images/icon-instagram.svg" alt=""/>
                        @realnathanf
                    </p>
                    <p className="follower">
                        <span className="follower-number">11k</span>
                        <span className="follower-title">Followers</span>
                    </p>
                    <p className="follower-suscriber"><img className="follower-icon" src="images/icon-up.svg" alt=""/>1099 today</p>
                </article>
                <article className="card card-youtube">
                    <p className="card-title">
                        <img src="images/icon-youtube.svg" alt=""/>
                        Nathan F.
                    </p>
                    <p className="follower">
                        <span className="follower-number">8239</span>
                        <span className="follower-title">Followers</span>
                    </p>
                    <p className="follower-unsuscriber"><img className="follower-icon" src="images/icon-down.svg" alt=""/>144 today</p>
                </article>
            </div>
        </div>   
</section> );
}
 
export default SectionOne;