const Input = (props) => {
    const handleChange = (e) => {
      props.setText(e.target.value);
    };
  
    return (
      <div>
        <input value={props.text} onChange={handleChange} />
        <button onClick={() => props.setText("")}>Clear</button>
      </div>
    );
  };

export default Input;