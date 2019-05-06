import './App.css';
import React from 'react';
import SideBar from './SideBar';
import WebPlayer from './WebPlayer';
import MainView from './MainView';

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
      },
      {
        name: 'Beatles',
        songs: ['Yellow', 'Helter', 'Help']
      },
      {
        name: 'Rap',
        songs: ['Damn', 'Dope Af', 'That cool song']
      }
    ]
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }

  render() {
    return (
      <div className='container'>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className='content' style={{ backgroundColor: defaultBackground }}>
          <MainView
            name={this.state.serverData.user && this.state.serverData.user.name}
          />
        </div>
        <div className='player'>
          <WebPlayer />
        </div>
      </div>
    );
  }
}

export default App;
