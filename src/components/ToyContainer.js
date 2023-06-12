import React from 'react';
import ToyCard from './ToyCard';

function ToyContainer({ toys, onDeleteToy, onUpdateLikes }) {
  return (
    <div id='toy-collection'>
      {
        /* Render the collection of ToyCards */ toys.map((toy) => {
          return (
            <ToyCard
              key={toy.id}
              name={toy.name}
              image={toy.image}
              likes={toy.likes}
              onDeleteToy={onDeleteToy}
              toyId={toy.id}
              onUpdateLikes={onUpdateLikes}
            />
          );
        })
      }
    </div>
  );
}

export default ToyContainer;
