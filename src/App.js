import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './home/pages/Home';
import NavBar from './shared/components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/projects' exact>
          <p>PROJECTS</p>
        </Route>
        <Route path='/blogs' exact>
          <p>BLOGS</p>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
