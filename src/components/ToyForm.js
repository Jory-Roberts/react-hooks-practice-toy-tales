import React, { useState } from 'react';

function ToyForm({ addToy }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newToy = {
      name,
      image,
      likes: 0,
    };

    try {
      const response = await fetch('http://localhost:3001/toys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newToy),
      });

      if (response.ok) {
        console.log(newToy);
        const addedToy = await response.json();
        addToy(addedToy);
        setName('');
        setImage('');
      } else {
        console.error('Failed to add toy');
      }
    } catch (error) {
      console.error('Error adding toy', error);
    }
  };

  return (
    <div className='container'>
      <form
        className='add-toy-form'
        onSubmit={handleSubmit}
      >
        <h3>Create a toy!</h3>
        <input
          type='text'
          name='name'
          placeholder="Enter a toy's name..."
          className='input-text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type='text'
          name='image'
          placeholder="Enter a toy's image URL..."
          className='input-text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type='submit'
          name='submit'
          value='Create New Toy'
          className='submit'
        />
      </form>
    </div>
  );
}

export default ToyForm;
