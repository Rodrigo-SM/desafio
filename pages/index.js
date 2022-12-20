import Head from 'next/head';
import Script from 'next/script';
import React, { useState } from 'react';



function Home() {
  const [count, setCount] = useState(0);
  const handleSub = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }





  return (<div className='page'>



    <header id='header'>
      <section>
        <h1 id='titulo'>Formulário para compra de Pacote de Stickers</h1>
      </section>
      <img src="Shape.svg" alt="Shape" />



      <input type="checkbox" id="dark-mode-input" name='dark-mode' />
      <label for="dark-mode-input"></label>


    </header>



    <fieldset id='OneQ'>
      <label >Quais stickers?</label> <br /> <br />

      <div className='inputs'><input type="checkbox" id="react" value="react" />React </div>
      <div className='inputs'><input type="checkbox" id="vue" value="vue" />Vue </div>
      <div className='inputs'><input type="checkbox" id="angular" value="angular" />Angular </div>


    </fieldset>

    <fieldset id='TwoQ'>
      <label >Quantos stickers de cada?</label> <br /> <br />
      <div id='botoes'>
        <button id='menos' onClick={handleSub}>-</button>
        <div id='box'>{count}</div>
        <button id='mais' onClick={() => { setCount(count + 1) }}>+</button>

      </div>
    </fieldset>

    <fieldset id='threeQ'>
      <div>
        <section id='section'>
          Observações
        </section>
        <textarea rows="4" id='obs' name='obs'></textarea>
      </div>

    </fieldset>

    <footer>
      <button id='enviar'>ENVIAR</button>
    </footer>





  </div>)
}






export default Home