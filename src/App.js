import {HashRouter, Route} from 'react-router-dom';
import Home from "./routes/Home"
import About from "./routes/About"
import Result from "./routes/Result"

function App() {
  
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/About" exact={true} component={About}/>
      <Route path="/Result" exact={true} component={Result}/>
    </HashRouter>
  );
}

export default App;
