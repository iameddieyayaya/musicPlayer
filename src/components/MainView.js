import './MainView.css';
import React from 'react';

class MainView extends React.Component {
  render() {
    return (
      <div className='main-content'>
        {this.props.name && <h1>Made for {this.props.name}</h1>}
      </div>
    );
  }
}

export default MainView;
