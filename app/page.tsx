function Button({title}){
  return (
    <button type="button">{title}</button>
  );
}

const Home = () => {

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <textarea className="story"></textarea>
          <Button title="Set text context" id="button-1"/>
          <Button title="Clear text context" id="button-2"/>
        </div>
    </main>
  )
}

export default Home;