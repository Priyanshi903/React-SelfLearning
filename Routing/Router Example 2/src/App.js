import NotFound from "../src/pages/NotFound";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        {/* add exact or change the order */}
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        {/* any path matches this path, therefore it should be last */}
        <Route path='*' exact>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
