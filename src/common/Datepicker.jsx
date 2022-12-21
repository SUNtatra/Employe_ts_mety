import React from "react";

const styleCssDate = {
    width: '100%',
}

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
export const DatePickerPersonalise = ({nameInput, handleChange, valeurDate}) => {

  return (
    <div>
        <input type="date" style={styleCssDate} onChange={handleChange} value={valeurDate} name={nameInput}/>
    </div>
    
  );
};