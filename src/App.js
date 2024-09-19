import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Shopping-app</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div> 
        <Navbar/>
      </div>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/cart" element = {<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
