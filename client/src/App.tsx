import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { Character } from './pages/Character';

import { Home } from './pages/Home';

export default function App() {
  return (
    <Router>
      <Layout sidebarContent={<Navigation />}>
        <Switch>
          <Route path='/character/:id'>
            <Character />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
