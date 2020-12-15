import React from "react";
import {HashRouter,Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App(){
  return (<HashRouter>
    <Route path ="/" exact={true} component={Home}/>
    <Route path ="/about" component={About}/>
    <Route path ="/hello">
      <h1>hello world</h1>
    </Route>
  </HashRouter>);
}

export default App;