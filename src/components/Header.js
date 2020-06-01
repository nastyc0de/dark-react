import React from 'react';

const Header = ({children}) => {

    return (
        <header className="header">
        <div className="wrapper">
            <div className="header-grid">
                <div>
                    <h1>Social Media Dashboard</h1>
                    <p className="header-total">Total follower: 23.004</p>
                </div>
                {children}
            </div>
        </div>
        </header>
      );
}
 
export default Header;