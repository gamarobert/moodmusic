import React from 'react';

const Home = () => {
  return (
    <div className='home-grid '>
      <div className='grid-about text-center'>
        <h1>What is this?</h1>
        <p>
          <i>moodmusic</i> is a web application created with ReactJs along with
          Bootstrap 4. <i>moodmusic</i> aims to curate tracks depending on the
          users mood and genre preference using the Spotify Web API.
        </p>
      </div>
      <div className='grid-login text-center'>
        <h2>Login With Spotify</h2>
        <p>
          Login through Spotify in order to continue using <i>moodmusic</i>.
        </p>
        <button
          className='btn btn-primary m-auto'
          onClick={() => {
            window.location = window.location.href.includes('localhost')
              ? 'http://localhost:5000/api/login'
              : 'https://moodmusic-backend.herokuapp.com/login';
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
