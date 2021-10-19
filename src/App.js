import './App.css';
import Header from './Header.js';
import Navbar from './Navbar.js';
import OMRpage from './OMRpage.js';
import Footer from './Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Files from './Files.js';
import Exams from './Exams.js';
import Records from './Records.js';
import Reports from './Reports.js';
import Utilities from './Utilities.js';
import Help from './Help.js';

function App() {
  return (
    <>
      <Router>
          <Header/>
          <Navbar/>
          <Switch>
            <Route path="/files" exact component={Files} />
            <Route path="/exams" component={Exams} />
            <Route path="/records" component={Records} />
            <Route path="/reports" component={Reports} />
            <Route path="/utilities" component={Utilities} />
            <Route path="/help" component={Help} />
          </Switch>
          <OMRpage />
          <Footer />
      </Router>
    </>
  );
}

export default App;
