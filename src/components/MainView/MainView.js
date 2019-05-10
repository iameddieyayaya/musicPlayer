import './MainView.css';
import React from 'react';
import ImageList from '../ImageCard/ImageList';
import RecentlyPlayed from '../SideBar/RecentlyPlayed';

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
        <li>
          <a href='#'>FEATURED </a>
        </li>
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
    console.log(this.props);

    return (
      <div className='main-content'>
        <MainContentNavBar />
        {this.props.name && <h1> Made for {this.props.name}</h1>}
        <ImageList images={this.props.topPics} />
        <h1>Recently Played</h1>
        {/* <ImageList images={this.props.recentlyPlayed} /> 
        Gotta figure out how to filter out dupes
        Using recently played.tracks.albums for images.
      */}
        <h1>Top Artists</h1>
        <ImageList images={this.props.topArtists} />
      </div>
    );
  }
}

export default MainView;
