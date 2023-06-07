import Products from './components/Products';
import './App.css';
import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import NewProduct from './components/NewProduct';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/product" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<EditProduct />} />
        <Route path='/new-product' element={<NewProduct />} />
      </Routes>
      {/* <Products /> */}
    </Layout>
  );
}

export default App;
