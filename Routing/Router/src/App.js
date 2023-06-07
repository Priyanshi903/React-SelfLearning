import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/PrioductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          {/* redirecting route */}
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* dynamic path(adding route params) */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
