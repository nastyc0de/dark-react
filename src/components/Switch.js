import React from 'react';

const Switch = () => {
    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark mode</p>
            <input type="checkbox" className="checkbox"id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>
      );
}
 
export default Switch;