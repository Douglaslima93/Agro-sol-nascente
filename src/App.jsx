import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className='main'>

        <div>Logo</div>

        <header className='menu'>

        <ul>
          <li><a href='#Inicio'>Inicio</a></li>
          <li><a href='#Quem Somos'>Quem Somos</a></li>
          <li><a href='#Serviços'>Serviços</a></li>
          <li><a href='#Contato'>Contato</a></li>
        </ul>
        </header>

        <div>
          Conheça alguns de nossos parceiros
        </div>

        <div>
          <h2>Quem Somos</h2>
          <p>Historia</p>
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
