import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SearchSku from './product/search';
import ProductDetail from './product';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/detail/:sku" element={<ProductDetail/>}/>
          <Route path="/" element={<SearchSku/>}/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
