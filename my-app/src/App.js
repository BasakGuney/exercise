import logo from "./logo.svg";
import "./App.css";
import MyTreeView from "./treeview";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { TreeItem } from "@mui/x-tree-view";
import { TreeView } from "@mui/x-tree-view";
import { useEffect } from "react";
import Practice from "./practice";
import NavBar from "./NavBar";

const arr = ["a", "b", "c"];

function App() {
  const [selected, setSelected] = useState();
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/a/host-vars/">
            <NavBar index={1}></NavBar>
          </Route>
          <Route>
            <NavBar index={0}></NavBar>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
