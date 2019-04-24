import React from 'react';
import './Checkbox.css';

const Checkbox = props => {
  return (
    <React.Fragment>
      <form className="checkbox">
        <input 
          type="checkbox" 
          name={props.name}
          className="checkbox__input"
          onChange={props.onCheckboxClick}
          checked={props.isChecked}
        />
        <label className="checkbox__label">{props.label}</label>
      </form>
    </React.Fragment>
  );
};

export default Checkbox;