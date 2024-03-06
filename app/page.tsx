function SetTextButton(){
  return (
    <button id="set-text" type="button">Set text content</button>
  );
}

const Home = () => {

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <textarea className="story"></textarea>
          <SetTextButton />
          <button id="clear-text" type="button">Clear text content</button>
        </div>
    </main>
  )
}

export default Home;