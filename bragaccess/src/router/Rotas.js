import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";
import Home from '../componentes/pages/Home';
import Sobre from '../componentes/pages/Sobre';
import Perfil from '../componentes/pages/Perfil';
import Login from '../componentes/pages/Login';
import Listagem from '../componentes/pages/Listagem';
import Container from '../componentes/layout/container';
import Navbar from '../componentes/layout/Navbar';
import Footer from '../componentes/layout/Footer';
import Cadastrar from '../componentes/pages/Cadastrar';
import Avaliacao from '../componentes/pages/Avaliacao';
import CadastrarEstabelecimento from '../componentes/pages/CadastrarEstabelecimento';
import Comentarios from '../componentes/pages/Comentarios';
import Contato from '../componentes/pages/Contato';
import RoutePrevaider from './RouterProvaider';
function App() {
  return (
    
      <Router>
        <Navbar/>
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre/>} />
            <Route path='/contato' element={<RoutePrevaider><Contato/></RoutePrevaider>} />
            <Route path='/comentarios' element={<RoutePrevaider><Comentarios/></RoutePrevaider>} />
            <Route path='/perfil' element={<RoutePrevaider><Perfil /></RoutePrevaider>} />
            <Route path='/login' element={<Login />} />
            <Route path='/listagem' element={<Listagem/>} />
            <Route path='/cadastrar' element={<Cadastrar/>} />
            <Route path='/cadastrar_estabelecimento' element={<RoutePrevaider><CadastrarEstabelecimento/></RoutePrevaider>} />
            <Route path='/avaliacao' element={<RoutePrevaider><Avaliacao/></RoutePrevaider>} />
           
        </Routes>
      </Container>
      <Footer/>
    </Router>



    
  );
}

export default App;
