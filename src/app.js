import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';

// Code-splitting is automated for `routes` directory

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/:params?" />
    </Router>
  </div>
);

export default App;
