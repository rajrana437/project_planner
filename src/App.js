import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/create' component={CreateProject} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
