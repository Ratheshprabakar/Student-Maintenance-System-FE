import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from './components/Welcome';
import GetStudent from './components/GetStudent';
import DeleteStudent from './components/DeleteStudent';
import UpdateStudent from './components/UpdateStudent';
import GetMarks from './components/GetMarks';
import GetGrade from './components/GetGrade';
import AddStudent from './components/AddStudent';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/getStudent" component={GetStudent}></Route>
        <Route path="/addstudent" component={AddStudent}></Route>
        <Route path="/deleteStudent" component={DeleteStudent}></Route>
        <Route path="/updateStudent" component={UpdateStudent}></Route>
        <Route path="/getMark" component={GetMarks}></Route>
        <Route path="/getGrade" component={GetGrade}></Route>
      </Switch>
    </Router>
  );
}

export default App;
