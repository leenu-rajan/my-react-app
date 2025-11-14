
import { useState } from 'react';
// import './App.css'
import Modal from './components/Modal'
import Toast from './components/Toast';

function App() {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showToastNotification, setShowToastNotification] = useState<boolean>(false);
  return (
    <>
      <div>
        <button aria-label="open modal" onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal
          isOpen={showModal}
          title="User Details"
          children={<p> The details about the user will  be shown below:</p>}
          onClose={() => setShowModal(false)}
          size="small"
        />
      </div>

      <div>
        <button aria-label="open toast" onClick={() => setShowToastNotification(true)}>Open Toast</button>
        <Toast
          isOpen={showToastNotification}
          title="This is an info"
          onClose={() => setShowToastNotification(false)}
        ></Toast>
      </div>

    </>
  )
}

export default App
