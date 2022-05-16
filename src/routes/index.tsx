import { BrowserRouter, Routes as RouteWrapper, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
