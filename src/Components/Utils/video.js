import React from 'react';
import CardMedia from 'material-ui/Card';

const Video = (props) => {
  return (
    <CardMedia
      component='video'
      src={props.src}
      title="Dilshaan video"
      className="embed-responsive-item"
      style={{'marginBottom':'10px'}}
      type="video/mp4"
      controls
    />
  )
}

export default Video;
