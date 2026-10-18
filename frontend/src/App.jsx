import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";
import Exercises from "./pages/Exercises.jsx";
import Topic from "./pages/Topic.jsx";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateUser from "./pages/CreateUser.jsx";
import StudyLayout from "./layout/StudyLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<StudyLayout />}>
          <Route path="/estudos" element={<Home />} />
          <Route path="/modulos/:subjectId" element={<Home />} />
          <Route path="/topicos/:topicId" element={<Topic />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
