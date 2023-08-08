import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NoteAddEdit from "./views/NoteAddEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NoteAddEdit />} />
        <Route path="/edit/:id" element={<NoteAddEdit />} />
        <Route path="/*" element={<span>Page Not Found</span>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
