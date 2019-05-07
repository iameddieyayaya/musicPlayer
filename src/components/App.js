import './App.css';
import React from 'react';
import SideBar from './SideBar';
import WebPlayer from './WebPlayer';
import MainView from './MainView';
import queryString from 'query-string';

// change this to a linear gradient
//  background-image: linear-gradient(
//       to right bottom,
//       rgb(60, 66, 93),
//       rgb(0, 0, 0)
//     ),
//     linear-gradient(transparent, rgb(0, 0, 0) 70%);
//   background-size: cover;
//   background-repeat: no-repeat;

let defaultBackground = 'teal';
let fakeServerData = {
  user: {
    name: 'Eddie',
    playlists: [
      {
        name: 'My favorites',
        songs: ['Beat It', 'Karama Police', 'Salt']
      }
    ]
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { serverData: {}, topPics: [] };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ user: { name: data.display_name } }));

    fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ topPics: data.playlists.items }));
  }

  render() {
    return (
      <div className='container'>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className='content' style={{ backgroundColor: defaultBackground }}>
          {this.state.user ? (
            <div>
              <MainView
                name={this.state.user && this.state.user.name}
                topPics={this.state.topPics}
              />
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '10px'
              }}
            >
              <button
                onClick={() =>
                  (window.location = 'http://localhost:8888/login')
                }
                style={{
                  padding: '20px',
                  fontSize: '20px'
                }}
              >
                Sign in with Spotify
              </button>
            </div>
          )}
        </div>
        <div className='player'>
          <WebPlayer />
        </div>
      </div>
    );
  }
}

export default App;
