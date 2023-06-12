import React from 'react';

function ToyCard({ name, image, likes, toyId, onDeleteToy }) {
  const handleDeleteToy = async (toyId) => {
    try {
      const response = await fetch(`http://localhost:3001/toys/${toyId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDeleteToy(toyId);
      } else {
        console.error('Failed to delete toy');
      }
    } catch (error) {
      console.error('Error deleting toy', error);
    }
  };
  return (
    <div className='card'>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className='toy-avatar'
      />
      <p>{likes} Likes </p>
      <button className='like-btn'>Like {'<3'}</button>
      <button
        className='del-btn'
        onClick={() => handleDeleteToy(toyId)}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
