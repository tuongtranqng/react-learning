import "./App.css";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Trang Chủ</h1>;
}

function TaskList({ setIsOpen }) {
  return (
    
    <div>
      <h1>Danh Sách Tác Vụ</h1>

      <ul>
        <li>task</li>
        <li>task</li>
        <li>task</li>
        <li>task</li>

        <li>
          <button onClick={() => setIsOpen(true)}>
            Add Task
          </button>
        </li>
      </ul>
    </div>
  );
}

function TaskDetail() {
  return (
    <div>
      <h1>Thông Tin Tác Vụ</h1>

      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Mô tả</th>
            <th>Ngày hết hạn</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>none</td>
            <td>none</td>
            <td>none</td>
          </tr>

          <tr>
            <td>none</td>
            <td>none</td>
            <td>none</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '100px',
          borderRadius: '8px'
          
        }}
      >
        {children}

        <button onClick={onClose}>
          Add
        </button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Home</Link> |{" "}
          <Link to="/TaskList">Task List</Link> |{" "}
          <Link to="/TaskDetail">Task Detail</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/TaskList"
            element={<TaskList setIsOpen={setIsOpen} />}
          />

          <Route path="/TaskDetail" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2 style={{color: 'black'}}>Thông Tin Tác Vụ</h2>
        <input/>
      </Modal>
    </div>
  );
}

export default App;