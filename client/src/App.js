import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import TodoListPage from "./pages/TodoListPage";
import store from "./store/store";

const ROUTES = [{ path: "/", component: TodoListPage }];

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
