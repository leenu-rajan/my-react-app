
import { useState } from 'react';
// import './App.css'
import Modal from './components/Modal'

function App() {

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button aria-label="open modal" onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        isOpen={showModal}
        title="User Details"
        children={<p> The details about the user will  be shown below:</p>}
        onClose={() => setShowModal(false)}
        size="small"
      />
    </>
  )
}

export default App
