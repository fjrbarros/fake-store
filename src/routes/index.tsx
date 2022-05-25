import { BrowserRouter, Routes as RouteWrapper, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
