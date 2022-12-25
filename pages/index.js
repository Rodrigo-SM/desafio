import Head from 'next/head';
import React, { useState } from 'react';
import Switch from 'react-switch'
import ReactDOM from "react-dom/client";
import { useForm, useController } from "react-hook-form";


function Home() {
  const [count, setCount] = useState(0);
  const handleSub = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }



  let [sticker, setSticker] = useState(false)
  function Mudar() {
    if (sticker !== true) {
      sticker = true
    }
  }




  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });



  function validate() {
    if (count === 0 || sticker === false) return setStatus({ type: 'error', mensagem: 'Erro na compra do Sticker' });
    if (count > 0 && sticker === true) return setStatus({ type: 'success', mensagem: 'Sticker encomendado com sucesso' });
  }




  const send = async e => {
    e.preventDefault();

  }

  console.log(sticker)

  return (<div className='page'>




    <header id='header'>
      <section>
        <h1 id='titulo'>Formulário para compra de Pacote de Stickers</h1>
      </section>
      <img src="Shape.svg" alt="Shape" />




    </header>



    <form name='ComprarStickers' onSubmit={send} >
      <fieldset id='OneQ'>
        <legend>Quais stickers?</legend> <br /> <br />

        <div className='inputs'><input type="checkbox" id="react" value={sticker.react} name='Stickers' onClick={Mudar} />   <label for="react">React</label>       </div>
        <div className='inputs'><input type="checkbox" id="vue" value={sticker.vue} name='Stickers' onClick={Mudar} />  <label for="vue">Vue</label>           </div>
        <div className='inputs'><input type="checkbox" id="angular" value={sticker.angular} name='Stickers' onClick={Mudar} />  <label for="angular">Angular</label>        </div>


      </fieldset>

      <fieldset id='TwoQ'>
        <legend >Quantos stickers de cada?</legend> <br /> <br />
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
          <textarea rows="4" id='obs' name='obs' ></textarea>
        </div>

      </fieldset>



      <footer>
        <button id='enviar' type='submit' onClick={validate}>ENVIAR</button>
      </footer>

    </form>

    <div id='mensagem'>
      {status.type === 'success' ? <p className='success'>{status.mensagem}</p> : ""}
      {status.type === 'error' ? <p className='error'>{status.mensagem}</p> : ""}
    </div>


  </div>)
}






export default Home