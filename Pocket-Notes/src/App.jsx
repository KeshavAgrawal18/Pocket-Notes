import { BrowserRouter, Route, Routes } from "react-router-dom";

import Applayout from "./components/Applayout";
import Home from "./components/Home";
import Notes from "./components/Notes";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<Applayout />} >
        <Route index element={<Home />}
        />
        <Route path="notes/:noteId" element={<Notes />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
