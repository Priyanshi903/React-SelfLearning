import { Route, Routes, Navigate } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* change:Switch->Routes */}
        <Routes>

          {/* redirecting route ,by default push*/}
          <Route path="/" element={<Navigate replace to="/welcome" />} />

          {/* * is added to get the nested route */}
          {/* <Route path="/welcome/*" element={<Welcome />} /> */}
          {/* OR */}
          <Route path="/welcome/*" element={<Welcome />} >
            <Route path="new-user" element={<p>Welcome.new user!</p>} />
          </Route>


          {/* no need to write exact, it searches for exact itself */}
          {/* /products/* means starting with */}
          <Route path="/products" element={<Products />} />

          {/* dynamic path(adding route params) */}
          <Route path="/products/:productId" element={<ProductDetail />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
