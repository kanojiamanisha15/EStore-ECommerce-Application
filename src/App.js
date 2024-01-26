import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import LoginNew from './pages/LoginNew';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './context/PrivateRoute';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<LoginNew />} />
        {/* <Route path='/home-page' element={<PrivateRoute />} /> */}
        <Route path='/home-page' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/my-cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
