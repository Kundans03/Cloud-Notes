import './App.css';
import Add from './Components/Main.js/Add';
import Main from './Components/Main.js/Main';
import Login from './Components/reg_login/Login';
import Register from './Components/reg_login/Register';
import Start from './Components/reg_login/Start';
import EditNote from './Components/Main.js/EditNote';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './Components/Context/NoteState';

function App() {

  return (
    <div className="App">
      <NoteState>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/editnote" element={<EditNote/>}/>
          </Routes>
        </Router>
        </NoteState>
    </div>
  );
}

export default App;
