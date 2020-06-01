import React, {useRef} from 'react';

const Switch = ({setDarkMode, checked, setChecked}) => {
    const ref = useRef(null)

    function handleTheme(){
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
    }
    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark mode</p>
            <input ref={ref} checked={checked} onChange={handleTheme} type="checkbox" className="checkbox"id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>
      );
}
 
export default Switch;