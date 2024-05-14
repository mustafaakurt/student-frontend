import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home'; 
import StudentsView from './component/student/StudentsView';

function App() {
  return (
    <div className="App">
      <h2>Welcome to the frontend</h2>
      <Home />
      <StudentsView />
    </div>
  );
}

export default App;