import React,{Fragment} from 'react';

const OverviewCard = ({title,icon,suscriber,info_suscriber}) => {
    return (
            <Fragment>
                <article className="card-overview">
                    <p className="card-o-title">{title}</p>
                    <p className="card-o-icon"><img src={icon} alt=""/></p>
                    <p className="card-o-number">{suscriber}</p>
                    <p className="card-o-data card-o-positive-data"><img src="images/icon-up.svg" alt=""/>{info_suscriber}</p>
                </article>
            </Fragment>
                
    );
}
export default OverviewCard;