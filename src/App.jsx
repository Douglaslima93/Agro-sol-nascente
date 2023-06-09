import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Form from './Components/Form';
import Maps from './Components/Maps';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className='main'>
      
        <header id='itens' className='menu'>
      
        <div className='logo'><img src='./img/logo-sol.jpg'/></div>
        <ul>
        
          <li><a href='#inicio' id='inicio'>Ínicio</a></li>
          <li><a href='#historia'>Quem Somos</a></li>
          <li><a href='#servicos'>Serviços</a></li>
          <li><a href='#contato'>Contato</a></li>
          
        </ul>
        </header>

        <div className='parceiros'>
          <h2>Conheça alguns de nossos parceiros:</h2>
          <div className='img'>
            
            <img  src='./img/Golden.jpg' alt='Golden'/>          
            <img  src='./img/Magnus.png' alt='Magnus'/>
            <img  src='./img/special-dog.png' alt='special-dog'/>
            
          </div>
        </div>

        <div className='historia'>
          <h2 id='historia'>Quem Somos</h2>
          <p>Há mais de 20 anos no mercado buscando sempre a inovação , 
            o objetivo profissional da Agropecuária Sol Nascente é ser parceira em 
            realizações ou mais uma opção na execução de serviços de qualidade sempre visando o melhor atendimento.
            Para isso, contamos com uma equipe altamente qualificada e experientes no ramo, 
            além de trabalharmos apenas com produtos de alta qualidade, 
            o que garante o conforto e segurança aos clientes.</p>
            <div>
              <Carousel fade>
                <Carousel.Item interval={1500}>
            <img  src='./img/img-historia.jpg' />
                </Carousel.Item>

                <Carousel.Item interval={1500}>
            <img  src='./img/img-historia2.jpg' />
                </Carousel.Item>

                <Carousel.Item interval={1500}>
            <img  src='./img/img-historia3.jpg' />
                </Carousel.Item>

                <Carousel.Item interval={1500}>
            <img  src='./img/img-historia4.jpg' />
                </Carousel.Item>
              </Carousel>
            </div>
        </div>

        <div className='serviços'>
          <h2 id='servicos'>Nossos Serviços</h2>
          <p>A Agropecuária Sol Nascente possui uma equipe de profissionais, altamente qualificada e preparada para 
            atender com eficácia e dedicação e acima de tudo com o objetivo de sempre superar as expectativas de cada cliente. 
            Trabalha com rações e medicamentos para diversos animais, produtos para piscina e pesca, venda de peixes e 
            aquários, gaiolas. 
          </p>

          <Carousel fade>
            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src='./img/racao.jpg' alt='Ração'/>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src='./img/farmacia.jpg' alt='Farmacia'/>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src='./img/piscina.png' alt='Piscina'/>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src='./img/pesca.png' alt='Pesca'/>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src='./img/aquario.png' alt='Aquario'/>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src='./img/gaiolas.png' alt='Gaiolas'/>
            </Carousel.Item>

          </Carousel>
        </div>

        <div className='form-maps'>
          <Maps/>
          <Form/>
        </div>

        <div>
          <Footer/>
        </div>

      </div>

    </div>
  )
}

export default App
