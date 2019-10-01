import './App.css';
import React from 'react';
import SideBar from './SideBar/SideBar';
import WebPlayer from './WebPlayer/WebPlayer';
import MainView from './MainView/MainView';
import queryString from 'query-string';
// import RecentlyPlayed from './SideBar/RecentlyPlayed';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      topPics: [],
      topArtists: [],
      recentlyPlayed: [],
      selectedAudio: null,
      isPlaying: {}
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    if (!accessToken) {
      return;
    }

    //Grab User's Name
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: {
            name: data.display_name
          }
        })
      );

    //Featured Playlist
    fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          topPics: data.playlists.items
        })
      );

    // Grabs Playlist
    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(playlistData => {
        let playlists = playlistData.items;
        let trackDataPromises = playlists.map(playlist => {
          let responsePromise = fetch(playlist.tracks.href, {
            headers: {
              Authorization: 'Bearer ' + accessToken
            }
          });
          let trackDataPromise = responsePromise.then(response =>
            response.json()
          );
          return trackDataPromise;
        });
        let allTracksDataPromises = Promise.all(trackDataPromises);
        let playlistsPromise = allTracksDataPromises.then(trackDatas => {
          trackDatas.forEach((trackData, i) => {
            playlists[i].trackDatas = trackData.items
              .map(item => item.track)
              .map(trackData => ({
                name: trackData.name,
                duration: trackData.duration_ms / 1000
              }));
          });
          return playlists;
        });
        return playlistsPromise;
      })
      .then(playlists =>
        this.setState({
          playlists: playlists.map(item => {
            return {
              name: item.name,
              imageUrl: item.images[0].url,
              songs: item.trackDatas.slice(0, 3)
            };
          })
        })
      );

    //Recently Played
    fetch('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(recentlyPlayed => {
        this.setState({
          recentlyPlayed: recentlyPlayed.items.slice(0, 5).map(item => {
            let artist = item.track.artists[0].name;
            let track = item.track.name;
            let img = item.track.album.images[0].url;
            let preview_url = item.track.preview_url;
            let id = item.track.id;

            return {
              artist,
              track,
              img,
              preview_url,
              id
            };
          })
        });
      });

    //Users Top Artists
    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          topArtists: data.items
        })
      );
  }

  onAudioSelect = (audio, img, artist, track) => {
    this.setState({
      isPlaying: {
        selectedAudio: audio,
        play: true,
        img,
        artist,
        track
      }
    });
  };

  render() {
    const {
      user,
      topPics,
      recentlyPlayed,
      topArtists,
    } = this.state;
    return (
      <div className='container'>
        <div className='sidebar'>
          <SideBar
            recentlyPlayed={recentlyPlayed}
            onAudioSelect={this.onAudioSelect}
          />
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
              }}>
              <button
                onClick={() => {
                  window.location = window.location.href.includes('localhost')
                    ? 'http://localhost:8888/login'
                    : 'https://musicplayer-backend.herokuapp.com/login';
                }}
                style={{
                  padding: '20px',
                  fontSize: '20px'
                }}>
                Sign in with Spotify
              </button>
            </div>
          )}
        </div>
        <div className='player'>
          <WebPlayer isPlaying={this.state.isPlaying} />
        </div>
      </div>
    );
  }
}

export default App;
