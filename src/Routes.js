import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
