import {useState}from 'react';
import Testcontainer from './components/testcontainer';
import data from './data.js';
import "./styles/App.scss";
import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import Instructions from "./components/instructions";
import Result from "./components/result";

function App() {
  const [questions,setQuestion] = useState(data());
  const [score,setScore]=useState(0);
  return (
    <div className="App">
      <h1>Eye Testing Interface</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Instructions/>
          </Route>
          <Route path="/test" exact>
            <Testcontainer score={score} setScore={setScore} questions={questions}/>
          </Route>
          <Route path="/result" exact>
            <Result score={score} setScore={setScore}/>
          </Route>
          <Redirect to="/" />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
