import './WebPlayer.css';
import React from 'react';

class WebPlayerLeft extends React.Component {
  render() {
    return (
      <div className='webPlayer-left'>
        <div className='now-playing'>
          <span>
            <div>
              <a href='/#'>Img Here</a>
              <div className='track-info'>Artist: Song:</div>
              <button>
                <i className='fas fa-plus ' />
              </button>
              <button>
                <i className='fas fa-expand' />
              </button>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

class PlayerControls extends React.Component {
  render() {
    return (
      <div className='player-controls'>
        <div className='player-controls__buttons'>
          <button>
            <i className='fas fa-random' />
          </button>
          <button>
            <i className='fas fa-step-backward' />
          </button>
          <button>
            <i className='fas fa-play-circle' aria-hidden='true' />
          </button>
          <button>
            <i className='fas fa-step-forward' />
          </button>
          <button>
            <i className='fas fa-redo-alt' />
          </button>
          <div className='playback-bar'>
            <div className='progress-bar-time'>0:00</div>
            <div className='progress-bar-bar'>prog bar here</div>
            <div className='progress-bar-time'>4:20</div>
          </div>
        </div>
      </div>
    );
  }
}

class WebPlayerRight extends React.Component {
  state = { value: 80 };

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
              min='1'
              max='100'
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              className='vol-slider'
              id='volRange'
            />
          </div>
        </div>
      </div>
    );
  }
}

class WebPlayer extends React.Component {
  render() {
    return (
      <div className='webContainer'>
        <div className='webPlayer'>
          <WebPlayerLeft />
          <div className='now-playing-center'>
            <PlayerControls />
          </div>
          <WebPlayerRight />
        </div>
      </div>
    );
  }
}

export default WebPlayer;
