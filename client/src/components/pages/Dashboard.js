import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SelectForm from '../form/SelectForm';
import Player from '../player/Player';
import queryString from 'query-string';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      user: {
        name: ''
      },
      redirect: false
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let token = parsed.access_token;

    if (!token) {
      this.setState({ redirect: true });
    }
    fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + token }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: {
            name: data.display_name
          }
        })
      );
  }

  onSubmit(fields) {
    let { mood, genre } = fields;
    this.setState({ fields });
    this.getSong(mood, genre);
  }

  getSong(mood, genre) {
    let parsed = queryString.parse(window.location.search);
    let token = parsed.access_token;

    let limit = '1';
    fetch(
      'https://api.spotify.com/v1/recommendations?limit=' +
        limit +
        '&seed_genres=' +
        genre +
        '&min_tempo=' +
        mood,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    )
      .then(response => response.json())
      .then(data => this.setState({ track_uri: data.tracks[0].uri }));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    return (
      <div className='dashboard-grid'>
        <div className='grid-select-form text-center'>
          {this.state.user.name ? (
            <h2>Welcome {this.state.user.name}</h2>
          ) : (
            <h2>Loading...</h2> //Add SPINNER COMPONENT
          )}
          <SelectForm onSubmit={fields => this.onSubmit(fields)} />
        </div>
        {this.state.track_uri && (
          <div className='grid-select-player flex justify-center'>
            <Player track_uri={this.state.track_uri} />
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
