import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BookList from './BookList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
      </Switch>
    </Router>
  );
}

export default App;
