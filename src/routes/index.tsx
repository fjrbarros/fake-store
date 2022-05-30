import { BrowserRouter, Routes as RouteWrapper, Route } from 'react-router-dom';
import { Home, Shop, Cart, NotFound } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
