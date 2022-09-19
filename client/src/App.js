import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Aluno from "./pages/Aluno";
import Monitor from "./pages/Monitor";
import store from "./store/store";

const ROUTES = [{ path: "/quero-ser-aluno", component: Aluno },{ path: "/quero-ser-monitor", component: Monitor },{ path: "/", component: Home },];

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppNavbar />
        <CssBaseline />
        <Switch>
          {ROUTES.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
