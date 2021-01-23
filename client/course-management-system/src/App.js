import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import CoursePage from './components/CoursePage'
import CreateCoursePage from './components/CreateCoursePage'
import CreateAssigmentPage from './components/CreateAssigmentPage'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component = {Dashboard}/>
        <Route exact path="/course/:id" component = {CoursePage}/>
        <Route exact path="/course/:id/create-assigment" component = {CreateAssigmentPage}/>
        <Route exact path="/create-course" component = {CreateCoursePage}/>
      </Switch>
    </Router>
  );
}

export default App;
