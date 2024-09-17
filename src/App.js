import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/user/index";
import UserForm from "./components/userFofm/index";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux User Management</h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
};

export default App;
