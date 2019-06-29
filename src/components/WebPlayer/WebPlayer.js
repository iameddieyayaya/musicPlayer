import './WebPlayer.css';
import React from 'react';

class WebPlayerLeft extends React.Component {
  render() {
    return (
      <div className='player-card webPlayer-left'>
        <div className='now-playing'>
          <img style={{ width: '100px' }} src={this.props.img} />
          <div className='track'>{this.props.track}</div>
          <div className='artist'>{this.props.artist}</div>
        </div>
        <div className='player-card-btns'>
          <button>
            <i className='fas fa-plus ' />
          </button>
          <button>
            <i className='fas fa-expand' />
          </button>
        </div>
      </div>
    );
  }
}

class Player extends React.Component {
  // state = {
  //   play: null,
  //   selectedTrack: null,
  //   value: 1
  // };

  // audio = new Audio(this.props.audio);

  // togglePlay = () => {
  //   this.setState({ play: !this.state.play }, () => {
  //     this.state.play ? this.audio.play() : this.audio.pause();
  //   });
  // };

  // togglePlay = () => {
  //   this.setState(
  //     {
  //       play: !this.state.play,
  //       selectedTrack: this.props.audio
  //     },
  //     () => {
  //       let track = this.state.selectedTrack;
  //       if (track) {
  //         this.player.src = track;
  //         this.state.play ? this.player.play() : this.audio.pause();
  //       }
  //     }
  //   );
  // };

  // componentDidUpdate() {
  //   let track = this.props.audio;
  //   let playing = this.props.play;

  //   // if (track) {
  //   //   this.player.src = track;
  //   //   this.player.play();
  //   // }

  //   // if (playing) {
  //   //   this.player.src = track;
  //   //   this.player.play();
  //   // }
  // }

  // componentDidMount() {
  //   this.setState({
  //     play: this.props.play
  //   });
  // }

  render() {
    return (
      <div className='player'>
        <div className='progress-bar' id='progress-bar' />
        <div className='player-controls'>
          <div className='player-controls__buttons'>
            <button>
              <i className='fas fa-random' />
            </button>
            <button>
              <i className='fas fa-step-backward' />
            </button>
            <button onClick={this.props.togglePlay}>
              {!this.props.isPlaying ? (
                <i className='fas fa-play-circle' ariahidden='true' />
              ) : (
                <i className='fas fa-pause-circle' />
              )}
            </button>
            <button>
              <i className='fas fa-step-forward' />
            </button>
            <button>
              <i className='fas fa-redo-alt' />
            </button>
            <div className='playback-bar' id='time-control'>
              <div className='current-time'>
                {this.props.formatTime(this.props.currentTime)}
              </div>
              <input
                type='range'
                name='playbackRate'
                className='player__slider'
                value={this.props.currentTime / this.props.duration || 0}
                max='1'
                min='0'
                step='0.01'
                title='Playback Speed'
                onChange={this.props.handleTimeChange}
              />
              <div className='total-time'>
                {this.props.formatTime(this.props.duration)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class WebPlayerRight extends React.Component {
  render() {
    return (
      <div className='webPlayer-right'>
        <button>
          <i className='fas fa-list' />
        </button>
        <button>
          <i className='fas fa-stream' />
        </button>
        <button>
          <i className='fas fa-volume-up' />
        </button>
        <div className='progress-bar-vol'>
          <div className='slidecontainer'>
            <input
              type='range'
              className='vol-slider'
              value={this.props.volume}
              onChange={this.props.handleVolumeChange}
              max='1'
              min='0'
              step='0.01'
              id='volRange'
            />
          </div>
        </div>
      </div>
    );
  }
}

//WebPlayer - Main Component; Then gets broken down into three
//Player, Img(WebPlayerLeft), Volume Control(WebPlayerRight)

class WebPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: this.props.isPlaying.selectedAudio,
      currentTime: 0,
      isPlaying: false,
      volume: 0.8
    };

    this.audioElement = document.createElement('audio');
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  togglePlay = track => {
    // this.setState(
    //   {
    //     play: !this.state.play,
    //     selectedTrack: track
    //   },
    //   () => {
    //     let currentlyPLaying = this.state.selectedTrack;
    //     if (!this.state.play) {
    //       this.audioElement.src = currentlyPLaying;
    //       this.state.play
    //         ? this.audioElement.play()
    //         : this.audioElement.pause();
    //     }
    //   }
    // );
    // this.setState({
    //   play: !this.state.play
    // });
    this.setState(
      {
        isPlaying: !this.state.isPlaying,
        currentSong: track
      },
      () => {
        let currentlyPLaying = this.state.currentSong;
        this.audioElement.src = currentlyPLaying;
        if (this.state.currentSong) {
          this.state.isPlaying
            ? this.audioElement.play()
            : this.audioElement.pause();
        }
      }
    );
  };

  componentDidMount() {
    //This is used to update the player's song time.
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener(
      'timeupdate',
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      'durationchange',
      this.eventListeners.durationchange
    );
  }

  componentWillUnmount() {
    //Not sure why but this is 'good practice'
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      'timeupdate',
      this.eventListeners.timeupdate
    );
    this.audioElement.removeEventListener(
      'durationchange',
      this.eventListeners.durationchange
    );
  }

  /*** Methods  ***/
  setSong(song) {
    this.audioElement.src = song;
    this.setState({
      currentSong: song
    });
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  formatTime(time) {
    let d = Number(time);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    let mDisplay =
      m > 0 ? (m < 10 ? '0' : ':') + m + (m >= 0 ? ':' : ':') : '00:';
    let sDisplay = s > 0 ? (s <= 9 ? '0' : '') + s : '00';

    return mDisplay + sDisplay;
  }

  render() {
    return (
      <div className='webContainer'>
        <div className='webPlayer'>
          <WebPlayerLeft
            img={this.props.isPlaying.img}
            artist={this.props.isPlaying.artist}
            track={this.props.isPlaying.track}
          />
          <div className='now-playing-center'>
            <Player
              handleVolumeChange={e => this.handleVolumeChange(e)}
              handleTimeChange={e => this.handleTimeChange(e)}
              formatTime={time => this.formatTime(time)}
              togglePlay={() =>
                this.togglePlay(this.props.isPlaying.selectedAudio)
              }
              currentTime={this.audioElement.currentTime}
              duration={this.audioElement.duration}
              isPlaying={this.state.isPlaying}
              //******  */check the is playing props ***********************
              check={this.props.isPlaying.play}
            />
          </div>
          <WebPlayerRight
            volume={this.audioElement.volume}
            handleVolumeChange={e => this.handleVolumeChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default WebPlayer;
