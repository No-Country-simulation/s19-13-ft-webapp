import CreationsElements from './modules/pages/CreationsElements/CreationsElements.jsx';
import Navbar from './modules/components/navBar/navBar.jsx';
import Footer from './modules/components/footer/footer.jsx';
import Home from './modules/pages/Home-page/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <body className='bg-gradient-to-t from-blueButton to-whitePrimary'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route
            path='/crear-juego'
            element={<CreationsElements></CreationsElements>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </body>
  );
}

export default App;
