import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Youtube from '../Utils/youtube';
import Card, { CardActions, CardHeader, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AudioPlayer from '../Utils/audio'

const Albums = () => {
  return (
    <div>
      <Header />
        <div className="row col-md-offset-3 col-md-6 text-center" style={{'padding':'25px'}}>
            <Card raised>
              <Typography type="display3" component="h1" color="primary" style={{'padding':'25px'}}>
                Dilshaan's Pyaar
              </Typography>
              <CardHeader
                subheader="Listen it on Spotify."
              />
              <CardMedia
                style={{'padding':'10px','maxHeight':'100px'}}
                component='iframe'
                src="https://open.spotify.com/embed?uri=spotify:album:1IAafOcdJSwY0wd59QaW77&view=coverart"
                frameBorder="0"
                allowTransparency="true"
              />
              <CardHeader
                subheader="Listen it Online."
              />
              <AudioPlayer src={require('../../Audios/Pyar.mp3')}/>
              <CardHeader
                subheader="Watch full HD video of 'Pyaar'."
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
              <CardActions>
                <Button dense
                  color="primary"
                  href="https://www.youtube.com/watch?v=HGATo0DYtJ4&feature=youtu.be">
                  Share
                </Button>
                <Button dense
                  download="Dilshaan's_Pyar"
                  id="downloadButton"
                  color="primary"
                  href={require('../../Audios/Pyar.mp3')}>
                  Download
                </Button>
              </CardActions>
            </Card>
        </div>
      <Footer />
    </div>
  );
}

export default Albums;
