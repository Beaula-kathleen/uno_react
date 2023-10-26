import "./App.css";
import { Routes, Route } from "react-router-dom";
import {routing} from "../src/components/const/const"


function App() {
  return (
    <>
      <Routes>
        {routing.map((product, index) => {
          return (
            <Route
              key={index}
              exact={true}
              path={product.path}
              element={product.element}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
