import React from 'react';
import './CustomButton.css';

export default function CustomButton(props){

  const buttonStyle = {backgroundColor: props.color};

  return(<button type='button' className='colorChooser' onClick={props.onClick} style={buttonStyle}>
    {props.color}
  </button>);
}
