import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <BrowserRouter>
            <div>
              <Navbar />
              <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/project/:id' component={ProjectDetails} />
                <Route path='/signin' component={SignIn} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/signup' component={SignUp} />
                <Route path='/create' component={CreateProject} />
                <Route path='/project/:id' component={ProjectDetails} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
