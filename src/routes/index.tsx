import { BrowserRouter, Routes as RouteWrapper, Route } from 'react-router-dom';
import { Home, Shop, Cart } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
