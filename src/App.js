import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        This is home page.
      </Route>
    </Switch>
  );
}

export default App;
