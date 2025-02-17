import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tela_inicio from './Pages/Tela_inicio'
function App (){
  return (
    <>
      <div>
       <Router>
         <Routes>
            <Route path='/' element={<Tela_inicio/>}/>
            <Route  path='/tela_jogo' element={<Tela_jogo/>}/>
         </Routes>
       </Router>
        </div>
    </>
  )
}


export default App
