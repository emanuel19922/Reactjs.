
import './App.scss';

import Header from './components/Header/Header';
import ItemsListContainer from './components/ItemsListFilter/ItemsListFilter'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import CartWidget from './components/CartWidget/CartWidget';

import ItemsListFilter from './components/ItemsListFilter/ItemsListFilter';
import CartProvaider from './Context/CartProvaider'
import Main from './components/Main/Main';
import Footercontainer from './components/Footercontainer/Footercontainer';

import ItemDetailsId from './components/ItemDetailsId/ItemDetailsId';




function App() {

  return (

    <div>
      <CartProvaider>

        <BrowserRouter>

          <Header />


          < Routes>
            <Route path='/' exact element={<Main />} />
            <Route path='/product/:categoriName' element={<ItemsListFilter/>} />
            <Route path='/product/:categoriName' element={<ItemsListFilter/>} />
            <Route path='/filter/:id' element={<ItemDetailsId />} />
            <Route path='CartWidget' element={<CartWidget />} />
            <Route path='/product/:categoriName' element={<ItemsListContainer />} />

          </Routes>
        </BrowserRouter>

        <Footercontainer />

      </CartProvaider>



    </div>

  );
}

export default App;


//searchinput es el que busca la barra navegadora si encuentra el producto lo devuelvee 
