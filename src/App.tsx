import React, { useState } from 'react';
// import Search from './components/Search';

function App() {
  const [term, setTerm ] = useState("")  
  return (
  <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
  <section>
    <h1>Weather <span>Forecast</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ea sequi, enim a natus vero?</p>
  </section>

  <div className="flex mt-10">
  <input type="text" name='text' value={""} />
  <button type="submit">Send</button>
  </div>
  </main>
  );
}

export default App;
