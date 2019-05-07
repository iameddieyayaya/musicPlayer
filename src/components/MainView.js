import './MainView.css';
import React from 'react';
import ImageList from './ImageList';

class MainView extends React.Component {
  render() {
    return (
      <div className='main-content'>
        {this.props.name && <h1>Made for {this.props.name}</h1>}
        <ImageList images={this.props.topPics} />
      </div>
    );
  }
}

export default MainView;
