import React, { ChangeEvent, useState } from 'react';
// import Search from './components/Search';

import { optionType } from './types';

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");

  const [options, setOptions ] = useState<[]>([])

  const getResult = async (value : string) => {
   await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${ process.env.REACT_APP_API_KEY}`)
   .then(response => response.json()).then(response => setOptions(response))

  }

  const onInputchange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value)
      if(!value.length) return false;
    getResult(value)

  }

  const OnSelectOption = (option: optionType) => {

  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section>
        <h1>Weather <span>Forecast</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ea sequi, enim a natus vero?</p>
      </section>

      <div className="flex mt-10">
        <ul>

        </ul>
        <input type="text" name='text' value={term} onChange={onInputchange} />
        {options.map( (option : optionType,i: number )=> (
          <li key={i}>
            <button className="block text-yellow-400" onClick={()=>OnSelectOption(option)}>{option.name}</button>
          </li>
        ))}
        <button type="submit">Send</button>
      </div>
    </main>
  );
}

export default App;
