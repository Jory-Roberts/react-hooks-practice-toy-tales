import React, { useEffect, useState } from 'react';

import Header from './Header';
import ToyForm from './ToyForm';
import ToyContainer from './ToyContainer';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch('http://localhost:3001/toys');
        if (!response.ok) {
          throw new Error('request failed');
        }
        const toyData = await response.json();
        setToys(toyData);
      } catch (error) {
        console.error('Error fetching data', error);
        throw error;
      }
    };
    fetchToys();
  }, []);

  const addToy = (newToy) => {
    setToys([...toys, newToy]);
  };

  const onDeleteToy = (toyId) => {
    setToys(toys.filter((toy) => toy.id !== toyId));
  };

  const onUpdateLikes = (toyId, updatedLikes) => {
    setToys((toys) => toys.map((toy) => (toy.id === toyId ? { ...toy, likes: updatedLikes } : toy)));
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className='buttonContainer'>
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={onDeleteToy}
        onUpdateLikes={onUpdateLikes}
      />
    </>
  );
}

export default App;
