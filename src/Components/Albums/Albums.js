import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import PyarAlbum from './PyarAlbum';
import Card, {CardHeader} from 'material-ui/Card';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';
import Video from '../Utils/video';


const Albums = () => {
  return (
    <div>
      <Header />
        <PyarAlbum />
        <Hidden >
        <div className="row col-md-offset-3 col-md-6 text-center" style={{'padding':'25px'}}>
          <Card raised className="text-center">
            <Typography type="display3" component="h1" color="primary" style={{'paddingTop':'25px'}}>
              Fans' Request
            </Typography>
            <CardHeader
              subheader="Random request at Gym recorded by a fan."
            />
            <Video src={require('../../Videos/Dilshaan_Gym.mp4')} />
          </Card>
        </div>
      </Hidden>
      <Footer />
    </div>
  );
}

export default Albums;
