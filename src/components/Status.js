import React, {useState,useRef, useEffect} from 'react';
import './Status.css';
import CustomButton from './CustomButton';

function Status(){

  const [text, setText] = useState('');
  const [display, setDisplay] = useState('none');
  const [textColor, setTextColor] = useState('default');
  const [published, setPublished] = useState(false);

  const inputRef = useRef();

  const colors = ['blue', 'red', 'pink', 'orange', 'skyblue'];

  const paletteStyle= {display: display};

  const colorButtons = colors.map(i => (
    <CustomButton key={i} color={i} onClick={()=> (setTextColor(i)) }/>
  ));

  const inputHandler= (e) =>{
    e.preventDefault();
    setText(e.target.value);
  }
  
  const submitHandler= (e) =>{
    e.preventDefault();
    e.target.elements.status.value.length>0 ? setPublished(true):alert('TextArea is empty');
  }

  const textStyle = {color: textColor};

  useEffect(()=>{
    alert("Text colour Changed to "+ textColor);
  }, [textColor]);

  useEffect(()=>{
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <>
      { published ?
          (<div className = "published" style={textStyle} >{text}</div>):
          (<form className="statusForm" onSubmit={(e)=> submitHandler(e)}>
            <textarea className="statusText"
              name="status"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) => (e.target.value.length>0? setDisplay('block'):setDisplay('none')) }
              style={textStyle}
              ref={inputRef} 
              value={text} 
            />
            <div id = 'colorPalette' style={paletteStyle}>
              {colorButtons}
            </div>
            <button type='submit'>Publish Text</button>
          </form>)
          
        }
    </>
  );  
}

export default Status;