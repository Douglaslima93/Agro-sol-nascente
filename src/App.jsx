import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className='main'>

        <header className='menu'>

        <div className='logo'><img src='./public/img/logo-sol.jpg'/></div>

        <ul>
          <li><a href='#Inicio'>Ínicio</a></li>
          <li><a href='#Quem Somos'>Quem Somos</a></li>
          <li><a href='#Serviços'>Serviços</a></li>
          <li><a href='#Contato'>Contato</a></li>
        </ul>
        </header>

        <div className='parceiros'>
          <h2>Conheça alguns de nossos parceiros:</h2>
          <div className='img'>
            <img src='./public/img/Golden.jpg' alt='Golden'/>
            <img src='./public/img/Magnus.png' alt='Magnus'/>
            <img src='./public/img/special-dog.png' alt='special-dog'/>
          </div>
        </div>

        <div className='historia'>
          <h2>Quem Somos</h2>
          <p>Há mais de 20 anos no mercado buscando sempre a inovação , 
            o objetivo profissional da Agropecuária Sol Nascente é ser parceira em 
            realizações ou mais uma opção na execução de serviços de qualidade sempre visando o melhor atendimento.
            Para isso, contamos com uma equipe altamente qualificada e experientes no ramo, 
            além de trabalharmos apenas com produtos de alta qualidade, 
            o que garante o conforto e segurança aos clientes.</p>
            <div className='imghistoria'>
            <img src='./public/img/img-historia.jpg' />
            </div>
        </div>

        <div>
          <h2>Nossos Serviços</h2>
          <p>Texto</p>
        </div>

        <div>
          <h2>Entre em Contato</h2>
          <p>Nome</p>
          <p>E-mail</p>
          <p>Assunto</p>
          <p>Mensagem</p>
          <button>Enviar</button>
        </div>

      </div>

    </div>
  )
}

export default App
