import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app/app';
import Home from './components/home/home';
import Quote from './components/quote/quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/app" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
