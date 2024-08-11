import { BrowserRouter, Route, Routes } from "react-router-dom";

import Applayout from "./components/Applayout";
import Home from "./components/Home";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<Applayout />} >
        <Route index element={<Home />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
