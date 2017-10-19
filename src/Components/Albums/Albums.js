import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Youtube from '../Utils/youtube';
import Card, { CardHeader, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Albums = () => {
  return (
    <div>
      <Header />
      <h1>Dilshaan's Music Album </h1>
        <div className="col-md-6 text-center" style={{'padding':'25px'}}>
            <Card raised>
              <CardHeader
                title="Dilshaan's Pyaar"
                subheader="Listen on Spotify."
              />
              <CardMedia
                style={{'padding':'10px'}}
                component='iframe'
                src="https://open.spotify.com/embed?uri=spotify:album:1IAafOcdJSwY0wd59QaW77&view=coverart"
                frameBorder="0"
                allowTransparency="true"
              />
              {/* <Youtube src="https://www.youtube.com/embed/HGATo0DYtJ4"/> */}
              <CardContent>
                <Typography type="title" component="h1">
                  Youth Anthem
                </Typography>
                <Typography component="p">
                  Record breaking album with the beautiful voice of Dilshaan.
                </Typography>
              </CardContent>
            </Card>
        </div>
        <div className="col-md-6 text-center" style={{'padding':'25px'}}>
            <Card raised>
              <CardHeader
                title="Dilshaan's Pyaar"
                subheader="Listen on Spotify."
              />
              <Youtube src="https://www.youtube.com/embed/HGATo0DYtJ4"/>
              <CardContent>
                <Typography type="title" component="h1">
                  Youth Anthem
                </Typography>
                <Typography component="p">
                  Record breaking album with the beautiful voice of Dilshaan.
                </Typography>
              </CardContent>
            </Card>
        </div>
      <Footer />
    </div>
  );
}

export default Albums;
