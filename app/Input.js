const inputStyle={
  textAlign: 'center'
}

const divStyle = {
  width:'249px',
  margin: 'auto',
  paddingBottom: '10px'
}

const Input = (props) => {
    const handleChange = (e) => {
      props.setText(e.target.value);
    };
  
    return (
      <div style={divStyle}>
        <input style={inputStyle} value={props.text} onChange={handleChange} disabled={props.disabled}/>
      </div>
    );
  };

export default Input;