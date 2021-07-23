import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  );
}

export default App;
