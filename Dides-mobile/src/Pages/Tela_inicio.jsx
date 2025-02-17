import React from 'react'
import './Tela_inicio.css'
import { useNavigate } from 'react-router-dom';

function Tela_inicio() {
 const navigate= useNavigate()

 const handleNavegacao= () => {
 navigate ('/Tela_jogo')
 }

  return (
    <div className='tela-inicio-container'>
    <img src='./Img/logo_slogan.png' alt='' className='logo-container'/>
    <div className='container-verde'>
    <h2>Clique no botão iniciar para começar a jogar</h2>
    </div>
    <button className='iniciar-container' onClick={handleNavegacao}>Iniciar</button>
    </div>
  )
}

export default Tela_inicio