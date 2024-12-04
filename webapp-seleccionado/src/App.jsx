import CreationsElements from './modules/pages/CreationsElements/CreationsElements.jsx';
import Navbar from './modules/components/navBar/navBar.jsx';
import Footer from './modules/components/footer/footer.jsx';
import Home from './modules/pages/Home-page/Home.jsx';
import Templates from './modules/pages/Plantillas/templates.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TriviaGame from './modules/pages/playGame/TriviaGame.jsx';
function App() {
  return (
    <div className='bg-gradient-to-t from-blueButton to-whitePrimary'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route
            path='/crear-juego'
            element={<CreationsElements></CreationsElements>}
          ></Route>

          <Route path='/Plantillas' element={<Templates></Templates>}></Route>
          <Route
            path='/play-trivia'
            element={<TriviaGame></TriviaGame>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
