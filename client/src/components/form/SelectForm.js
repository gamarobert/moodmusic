import React, { Component } from 'react';

export class SelectForm extends Component {
  constructor() {
    super();
    this.state = {
      mood: '95',
      genre: 'rock'
    };
  }

  handleMoodChange = event => {
    this.setState({ mood: event.target.value });
  };

  handleGenreChange = event => {
    this.setState({ genre: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <form className="form-grid text-center">
        <div className="grid-mood">
          <h2 className="form-label text-center">Mood</h2>
          <select
            value={this.state.mood}
            id="moodSelect"
            onChange={this.handleMoodChange}
          >
            <option value="95">Happy</option>
            <option value="75">Sad</option>
            <option value="165">Angry</option>
          </select>
        </div>

        <div className="grid-genre">
          <h2 className="form-label text-center">Genre</h2>
          <select
            value={this.state.genre}
            id="genreSelect"
            onChange={this.handleGenreChange}
          >
            <option value="rock">Rock</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="edm">EDM</option>
            <option value="country">Country</option>
            <option value="pop">Pop</option>
          </select>
        </div>

        <div className="grid-submit-button m-auto">
          <button onClick={e => this.onSubmit(e)} className="btn btn-primary">
            Listen!
          </button>
        </div>
      </form>
    );
  }
}

export default SelectForm;
