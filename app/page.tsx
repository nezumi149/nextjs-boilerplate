const Home = () => {

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <textarea className="story"></textarea>
          <button id="set-text" type="button">Set text content</button>
          <button id="clear-text" type="button">Clear text content</button>
        </div>
        <script>
          const story = document.body.querySelector(".story");
          const array = ['a','b','c','d']

          const setText = document.body.querySelector("#set-text");
          setText.addEventListener("click", () => {
            
          const shuffled = array.sort(() => 0.5 - Math.random());
          let n = 2
          let random = array.sort(() => .5 - Math.random()).slice(0,n)
            story.textContent = random.toString();
          });

          const clearText = document.body.querySelector("#clear-text");
          clearText.addEventListener("click", () => {
            story.textContent = "";
          });

        </script>
    </main>
  )
}

export default Home;