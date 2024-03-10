import React from 'react';

const inputStyle: React.CSSProperties={
  textAlign: 'center'
}

const divStyle: React.CSSProperties = {
  border: '#AAAAAA 2px solid',
  borderRadius: '15px',
  width: '249px',
  margin: 'auto',
  paddingBottom: '10px',
  position: 'absolute'
}

const Input = (props: any) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setText(e.target.value);
    };
  
    return (
      <div style={props.styling}>
        <input style={inputStyle} value={props.text} onChange={handleChange} disabled={props.disabled}/>
      </div>
    );
  };

export default Input;