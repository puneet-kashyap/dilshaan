import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Card, {CardHeader} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Video from '../Utils/video';



const Gallery  = () => {
  return (
    <div>
      <Header />
      <div className="col-md-offset-4 col-md-4 text-center" style={{'padding':'15px'}}>
        <Card raised>
          <Typography type="display3" component="h1" color="primary" style={{'paddingTop':'25px'}}>
            Fans' Request
          </Typography>
          <CardHeader
            subheader="Song at gym recorded by a fan."
          />
          <Video src={require('../../Videos/Dilshaan_Gym.mp4')} />
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
