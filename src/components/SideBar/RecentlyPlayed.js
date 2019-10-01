import React from 'react';

const RecentlyPlayed = props => {
  const recent = props.recent.map(item => {
    return (
      <div
        key={item.id}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          this.props.togglePlay();
          props.onAudioSelect(
            item.preview_url,
            item.img,
            item.artist,
            item.track
          );
        }}>
        {item.artist} - {item.track}
      </div>
    );
  });

  return (
    <div>
      <h5>{recent}</h5>
    </div>
  );
};
export default RecentlyPlayed;
