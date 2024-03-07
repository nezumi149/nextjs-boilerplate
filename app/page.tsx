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

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <TextArea text="" id="textarea"/>
          <Button title="Set text context" id="set-text"/>
          <Button title="Clear text context" id="clear-text"/>
        </div>
    </main>
  )
}

export default Home;