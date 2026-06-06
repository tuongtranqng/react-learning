import "./App.css";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage';
import TaskList from "./TaskList";
import Detail from "./DetailPage";

function TaskDetail(){
  return(
    <p>there's nothing here</p>
  )
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <nav className="sidebar">
            
            <Link to="/">Home</Link>
            <Link to="/TaskList">Task List</Link>
            <Link to="/Detail">More</Link>
          </nav>

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Taskdetail" element={<TaskDetail />} />
              <Route
                path="/TaskList"
                element={<TaskList setIsOpen={setIsOpen} />}
              />

              <Route path="/Detail" element={<Detail />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;