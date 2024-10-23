import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Services from './components/Services';
import Banner from './components/Banner';
import { useState } from 'react';
import Cart from './components/cart';
import { Toaster } from 'react-hot-toast';

function App() {
    const [openCart, setOpenCart] = useState(false);
    return (
        <div>
            <Navbar setOpenCart={setOpenCart} />
            {openCart && <Cart setOpenCart={setOpenCart} />}
            <Home />
            <Services />
            <Product />
            <Banner />
            <Toaster position='bottom-center' reverseOrder={false} />
        </div>
    );
}

export default App;
