import React from 'react';

const Player = ({ track_uri }) => {
  return (
    <iframe
      title='player'
      src={'https://embed.spotify.com/?uri=' + track_uri}
      width='50%'
      height='380px'
      frameBorder='0'
      allowtransparency='true'
      allow='encrypted-media'
      crossOrigin='anonymous'
    ></iframe>
  );
};

export default Player;
