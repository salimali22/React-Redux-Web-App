import './App.css';
import Header from './components/header';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Allproducts from './components/Allproducts';
import Footer from './components/footer';
import PagenotF from './components/PageNotFound';
import Productdetail from './components/productdetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          
        <Route path='/' element = {<Allproducts />} />
        <Route path='/products/:productId' element = {<Productdetail />} />
        <Route path='*' element = {<PagenotF />} />
        </Routes>
     <Footer/>
    </div>
    </Router>

  );
}

export default App;
