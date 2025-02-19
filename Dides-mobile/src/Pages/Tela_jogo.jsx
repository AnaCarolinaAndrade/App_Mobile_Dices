import React from 'react'
import './Tela_jogo.css'

function Tela_jogo() {
  return (
    <div>
      <img src='./Img/logo_dides.png' alt=''/>
      <button className='container-jogar'>Jogar</button>
      <button className='container-sair'>Sair</button>
    </div>
  )
}

export default Tela_jogo