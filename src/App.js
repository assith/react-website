import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Teknikguide from './components/pages/Teknikguide';
import Quiz from './components/pages/Quiz';
import Cv from './components/pages/Cv';
import Login from './components/pages/Login';

function App() {
  return (
    // <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/teknikguide' component={Teknikguide} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/cv' component={Cv} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
    // </>
  );
}

export default App;
