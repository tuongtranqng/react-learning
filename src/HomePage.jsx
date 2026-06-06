import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'rgb(33, 32, 32)',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Add Task</button>
      </div>
    </div>,
    document.body
  );
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
      <h1>Trang Chủ</h1> 
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: 0,
          margin: 0,
          listStyle: "none"
        }}>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
          <li className="container">
            <div>
                <p>Home Work</p>
                <p>make a TakeList in Jsx</p>
              </div>
              <div>
                <p>Thursday, 02.06.2026</p>
                <p>10.00 A.M</p>
              </div>
          </li>
      </ul>
      <button onClick={() => setIsOpen(true)}>
            Add Task
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className='modal'>
          <h2>New Task</h2>
          <p>""</p>
          <input></input>
        </div>
      </Modal>
    </>
    );
    
}




export default Home;