import './ImageCard.css';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { name, images } = this.props.images;

    return (
      <div
        className='image-card-container'
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          color: '#fff'
        }}
      >
        <img
          className='image'
          ref={this.imageRef}
          alt={name}
          src={images[0].url}
        />
        <h3 style={{ textAlign: 'center', fontSize: '16px' }}>{name}</h3>

        {/* <div className='play-overlay-middle'>
          <i className='play-overlay fas fa-play-circle' aria-hidden='true' />
        </div> */}
      </div>
    );
  }
}

export default ImageCard;
