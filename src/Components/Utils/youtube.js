import React from 'react';
// import Paper from 'material-ui/Paper';
import CardMedia from 'material-ui/Card';

const Youtube = (props) => {
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <CardMedia
          component='iframe'
          src={props.src}
          title="Dilshaan video"
          // className="embed-responsive-item"
        />
      </div>

  </div>
  )
}

export default Youtube;
