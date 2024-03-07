import { useState } from 'react';

function Button({title, id, onclick}: {title:any, id: string, onclick: any}){
  return (
    <button onClick={onclick}  id={id} type="button">{title ? title : 'Button Name'}</button>
  );
}

function TextArea({text, id}: {text:string, id:string}){
  return(
    <textarea id={id}>{text}</textarea>
  );
}

const Home = () => {

  const [text, setText] = useState("");

  function setTextArea({text} : {text: string}){
    setText(text);
  }

  function clearTextArea(){
    setText("");
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <TextArea text={text}} id="textarea"/>
          <Button title="Set text context" id="set-text" onclick={setTextArea} />
          <Button title="Clear text context" id="clear-text" onclick={clearTextArea}/>
        </div>
    </main>
  )
}

export default Home;