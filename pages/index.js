import Head from 'next/head';
import React, { useState } from 'react';
import Switch from 'react-switch'
import ReactDOM from "react-dom/client";



function Home() {
  const [count, setCount] = useState(0);
  const handleSub = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }

  const [escuro, setEscuro] = useState(false)
  const tema = {
    backgroundColor: escuro ? "#071723" : "#fff",
    color: escuro ? "#fff" : "#071723"
  }

  function MudarTema() {
    setEscuro(old => !old)
  }




  const [react, setReact] = useState(false)
  const [vue, setVue] = useState(false)
  const [angular, setAngular] = useState(false)

  function MudarReact() {
    setReact(old => !old)
  }

  function MudarVue() {
    setVue(old => !old)
  }

  function MudarAngular() {
    setAngular(old => !old)
  }

  const [sticker, setSticker] = useState(false)
  function changeSticker (){
    if(react === true || vue === true || angular === true){
      setSticker(true)
    }
      else if(react === false && vue === false && angular === false){setSticker(false)}
  }

  
  

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });



  function validate() {
    if (count === 0 || sticker === false) return setStatus({ type: 'error', mensagem: 'Erro na compra do Sticker' });
    if (count > 0 && sticker === true) return setStatus({ type: 'success', mensagem: 'Sticker encomendado com sucesso' });
  }

console.log(sticker)


  const send = async e => {
    e.preventDefault();

  }

 console.log('React: ' + react + ' vue: ' + vue  + ' Angular: ' + angular     )

  return (<div className='page' style={tema} >




    <header id='header'>
      <section>
        <h1 id='titulo'>Formulário para compra de Pacote de Stickers</h1>
      </section>
      <img src="Shape.svg" alt="Shape" />



      <input type="checkbox" id="tema" onChange={MudarTema} />
      <label class="dark-mode-toggler" for="tema" onChange={MudarTema} >
        <div onChange={MudarTema}  ></div>
      </label>

    </header>


    <form name='ComprarStickers' onSubmit={send} >
      <fieldset id='OneQ'>
        <legend>Quais stickers?</legend> <br /> <br />

        <div className='inputs'><input type="checkbox" id="react" value={react.react} name='Stickers' onChange={MudarReact} onClick={changeSticker}/>   <label for="react">React</label>       </div>
        <div className='inputs'><input type="checkbox" id="vue" value={vue.vue} name='Stickers' onChange={MudarVue} onClick={changeSticker}/>  <label for="vue">Vue</label>           </div>
        <div className='inputs'><input type="checkbox" id="angular" value={angular.angular} name='Stickers' onChange={MudarAngular} onClick={changeSticker}  />  <label for="angular">Angular</label>        </div>


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
        <button id='enviar' type='submit' onDoubleClick={validate} onClick={changeSticker}>ENVIAR</button>
      </footer>

    </form>

    <div id='mensagem'>
      {status.type === 'success' && <p className='success'>{status.mensagem}</p>}

      {status.type === 'error' ? <p className='error'>{status.mensagem}</p> : ""}
    </div>


  </div>)
}






export default Home