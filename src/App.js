import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./screens/login/Login";
import Register from "./screens/signup/Register";
import { useContext } from "react";
import { UsersContext } from "./contexts/UsersContext";
import AddTransactionScreen from "./screens/AddTransactionScreen"

function App() {
  const { userInfo } = useContext(UsersContext);

  return (
    <main style={{ backgroundColor: "#F0F1F6" }}>
      <Switch>
        <Route path="/" exact>
          {Object.keys(userInfo).length !== 0 ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/signin" />
          )}
        </Route>
        <Route path="/home" component={HomeScreen} exact />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/home/addtransactions" component={AddTransactionScreen} />
      </Switch>
    </main>
  );
}

export default App;
