import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home'; 
import Navbar from "./component/common/Navbar";
import StudentsView from './component/student/StudentsView';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";

function App() {
  return (
    <main className="container mt-5">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/view-students" element={<StudentsView />}>
          </Route>
          <Route exact path="/add-student" element={<AddStudent />}>
          </Route>


        </Routes>
      </Router>
    </main>
  );
}

export default App;