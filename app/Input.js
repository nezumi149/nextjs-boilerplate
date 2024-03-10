const inputStyle={
  textAlign: 'center'
}

const Input = (props) => {
    const handleChange = (e) => {
      props.setText(e.target.value);
    };
  
    return (
      <div style={props.style}>
        <input style={inputStyle} value={props.text} onChange={handleChange} disabled={props.disabled}/>
      </div>
    );
  };

export default Input;