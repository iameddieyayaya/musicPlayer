import './App.css';
import React from 'react';
import SideBar from './SideBar/SideBar';
import WebPlayer from './WebPlayer/WebPlayer';
import MainView from './MainView/MainView';
import queryString from 'query-string';
import RecentlyPlayed from './SideBar/RecentlyPlayed';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      topPics: [],
      recentlyPlayed: [],
      topArtists: []
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    //Grab User's Data. For example Name
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ user: { name: data.display_name } }));

    //Featured Playlist
    fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ topPics: data.playlists.items }));

    //Users Recently Played
    fetch('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          recentlyPlayed: data.items.map(item => item.track.album)
        })
      );

    //Users Recently Played
    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ topArtists: data.items }));
  }

  render() {
    const { user, topPics, recentlyPlayed, topArtists } = this.state;
    console.log('TopARTISTS  ', this.state.topArtists);

    return (
      <div className='container'>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className='content'>
          {this.state.user ? (
            <div className='main-view'>
              <MainView
                name={user && user.name}
                topPics={topPics}
                recentlyPlayed={recentlyPlayed}
                topArtists={topArtists}
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
