import './reset.css';
import './main.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from '../About/About';
import Create from '../Create/Create';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Note from '../Note/Note';
import Modals from '../Modals/Modals';


function App() {
  return (
    <>
      <div className="main-content">
        <Router>
          <Header />
          <Switch>
            <Route exact path = '/' component = {Main} />
            <Route path = '/about' component = {About} />
            <Route path = '/create' component = {Create} />
            <Route exact path = '/note/' component = {Note} />
            <Route exact path = '/note/:noteURL' component = {Note} />
            <Route component = {Error} />
          </Switch>
        </Router>
      </div>
      <Footer />  
      <Modals />
      
   </>
  );
}

export default App;
