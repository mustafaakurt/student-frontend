import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import StudentsView from "./component/student/StudentsView";
import AddStudent from "./component/student/AddStudent";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();

  const handleViewStudents = () => {
    navigate("/view-students");
  };

  const handleAddStudent = () => {
    navigate("/add-student");
  };

  return (
    <div className="text-center">
      <h2 className="mb-4">Welcome to the Student Information System</h2>
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary me-2" onClick={handleViewStudents}>
          View Students
        </button>
        <button className="btn btn-success" onClick={handleAddStudent}>
          Add New Student
        </button>
      </div>

      <Routes>
        <Route path="/view-students" element={<StudentsView />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </div>
  );
};

export default Home;
