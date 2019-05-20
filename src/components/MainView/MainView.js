import './MainView.css';
import React from 'react';
import ImageList from '../ImageCard/ImageList';

const MainContentNavBar = () => {
  return (
    <nav
      style={{
        padding: '20px 0',
        paddingBottom: '12px',
        textAlign: 'center'
      }}
    >
      <ul className='main-content-nav'>
        <li>FEATURED</li>
        <li>PODCASTS</li>
        <li>CHARTS</li>
        <li>GENRES & MOODS</li>
        <li>NEW RELEASES</li>
        <li>DISCOVER</li>
      </ul>
    </nav>
  );
};

class MainView extends React.Component {
  render() {
    return (
      <div className='main-content'>
        <MainContentNavBar />
        {this.props.name && <h1> Made for {this.props.name}</h1>}
        <ImageList images={this.props.topPics} />
        <h1>Top Artists</h1>
        <ImageList images={this.props.topArtists} />
      </div>
    );
  }
}

export default MainView;
