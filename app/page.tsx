import { useState } from 'react';

function Button({title, id}: {title:any, id: string}){
  return (
    <button id={id} type="button">{title ? title : 'Button Name'}</button>
  );
}

function TextArea({text, id}: {text:string, id:string}){
  return(
    <textarea id={id}>{text}</textarea>
  );
}

const Home = () => {
  const [textbox, setText] = useState(0);

  function clickClear(){
    setText("");
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <textarea>{textbox}</textarea>
          <button onClick={clickClear}>
            Clear Text
          </button>
        </div>
    </main>
  )
}

export default Home;