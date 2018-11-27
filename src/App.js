import React, { Component } from 'react';
import logo from './Asset_1.svg';
import juanPic from './juan_pic.jpg'
import pamPic from './pamela_pic.jpg'
import holder from './placeholder.png';
import queryString from 'query-string';

import './App.css';

class Moods extends Component {
  render(){
    return(
      <div style={{width:"30%", display: 'inline-block'}}>
        <p style={{padding: "3px", 'font-weight': 'bold', 'font-size': '18pt'}}>Mood</p>
        <select id="moodSelect" style={{'background-color': 'black', color: 'white', width: '200px', height: '35px'}}>
          <option value="95">Happy</option>
          <option value="75">Sad</option>
          <option value="165">Angry</option>
        </select>
      </div>
    );
  }
}
class Genres extends Component {
  render(){
    return(
      <div style={{width:"30%", display: 'inline-block'}}>
        <p style={{padding: "3px", 'font-weight': 'bold', 'font-size': '18pt'}}>Genre</p>
        <select id="genreSelect" style={{'background-color': 'black', color: 'white', width: '200px', height: '35px'}}>
          <option value="rock">Rock</option>
          <option value="hip-hop">Hip-Hop</option>
          <option value="edm">EDM</option>
          <option value="country">Country</option>
          <option value="pop">Pop</option>
        </select>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {} ,
    }
  }
  componentDidMount(){
    let parsed = queryString.parse(window.location.search);
    let token = parsed.access_token;

    if(!token)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization' : 'Bearer ' + token }
    }).then(response => response.json())
    .then(data => this.setState({
      user : {
        name: data.display_name
      }
    }))
  }

  getSong(mood, genre){
    let parsed = queryString.parse(window.location.search);
    let token = parsed.access_token; 
    let limit = '1';
    fetch('https://api.spotify.com/v1/recommendations?limit='+ limit +'&seed_genres='+ genre + '&min_tempo=' + mood,{
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(response => response.json())
    .then(data => this.setState({
         track_uri : data.tracks[0].uri
        //duration: get duration to know when to play another song
        })
      )
  }

  render() {
  return (
      <div className="App">
      {this.state.user ?
        <div>
          <header>
                <img src={logo} alt={'logo'} style={{'height': '100px', 'margin': '2% 0px 5% 0px'}}></img>
          </header>
          <h2 style={{padding: '55px'}}>Welcome {this.state.user.name}!</h2>
          <Moods></Moods>
          <Genres></Genres>
          <br></br>
          <button className={"btn btn-info btn-lg"} style={{"margin-top" : "50px"}}onClick={() => {
            let mood = document.getElementById("moodSelect").value
            let genre = document.getElementById("genreSelect").value
            this.getSong(mood, genre)
          }}>Listen!</button>
          <br></br>
          {this.state.track_uri &&
            <div style={{'margin-top': "50px"}}>
              <iframe title={"player"} 
                    src={"https://embed.spotify.com/?uri="+ this.state.track_uri} 
                    width={"50%"} height={"380px"} frameborder={"0"} allowtransparency={"true"} 
                    allow={"encrypted-media"}>
              </iframe>
            </div>
          }            
          </div>
          :
          (<div>
            <header>
                <img src={logo} alt={'logo'} style={{'height': '100px', 'margin': '2% 0px 5% 0px'}}></img>
            </header>
            <div className="container" style={{height: "20rem"}}>
              <div className="row">
                <div className="col">
                  <h1>What is this?</h1>
                    <p>
                    <i>moodmusic</i> is a web application created with ReactJs along with Bootstrap 4. <i>moodmusic</i> aims to curate tracks depending on the users mood and genre preference using the Spotify Web API
                    </p>
                </div>
                <div className="col" style={{width: "5rem", padding: "5px"}}>
                    <h2>Login With Spotify</h2>
                    <p>Login through Spotify in order to continue using <i>moodmusic</i>.</p>
                    <button className="btn btn-primary" onClick={() => {
                      window.location = window.location.href.includes('localhost') 
                      ? 'http://localhost:8888/login' 
                      : 'https://moodmusic-backend.herokuapp.com/login'
                    }}> Login </button>
                </div>  
             </div> 
             </div>
              <footer>
                <div className="container-fluid" style={{margin: "100px 0px 0px 0px", padding: "20px", 'background-color':"lightgray"}}>
                  <div className="row">
                    <div className="col">
                      <img className="rounded-circle" alt="" src={juanPic} style={{width: "140px", height: "140px"}}/>
                      <h2>Juan Carrera</h2>
                        <p>
                            From Orange, CA currently a computer science student at California State University,/ Fullerton. Fields that I am interested in are Web Applications and Mobile Development. I like to enjoy free time going to music festivals and playing video games.
                        </p>
                      <button className="btn btn-success" href="https://github.com/jweird">View Github</button>
                    </div>
                    <div className="col">
                      <img className="rounded-circle" alt="" src={holder} style={{width: "140px", height: "140px"}}/>
                      <h2>Robert Gama</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor consequat lacus, quis tempor augue placerat eu. Morbi suscipit viverra ullamcorper. Quisque at finibus nunc. Proin eleifend, dui at rutrum porta, massa ante sollicitudin odio, nec commodo dui ipsum ut ante. Fusce turpis erat, condimentum in condimentum vulputate, sagittis sit amet orci. Praesent tempor lectus est, vel efficitur odio fringilla et. Pellentesque elementum non magna vitae tincidunt. 
                        </p>
                      <button className="btn btn-success" href="https://github.com/gamarobert">View Github</button>
                    </div>
                    <div className="col">
                      <img className="rounded-circle" alt="" src={pamPic} style={{width: "140px", height: "140px"}}/>
                      <h2>Pamela Camacho</h2>
                        <p>
                        From Glendale, CA. Currently a senior at California State University, Fullerton. Studying Computer Science to pursue either a career in Cyber Seurity or Software Engineering. Free time spent usually going to watch live music or any type of art entertainment.                        </p>
                      <button className="btn btn-success" href="https://github.com/pcamacho3">View Github</button>
                    </div>
                  </div>
                </div>
              </footer>
          </div>)
          }
      </div>
    );
  }
}

export default App;
