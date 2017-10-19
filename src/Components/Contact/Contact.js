import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="row">
          <div className="col-md-4 text-center" style={{'padding':'25px'}}>
            <Card raised style={{'maxWidth':'300px', 'padding': '10px'}}>
              <CardMedia
                component='iframe'
                src="https://open.spotify.com/embed?uri=spotify:album:1IAafOcdJSwY0wd59QaW77&view=coverart"
                frameBorder="0"
                allowTransparency="true"
                className="embed-responsive-item"
              />
              <CardContent>
              <Typography type="title" component="h2">
                Dilshaan's Pyar
              </Typography>
              <Typography component="p">
                Listen your favorite singer on spotify.
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense color="primary">
                Share
              </Button>
              <Button dense color="primary">
                Learn More
              </Button>
            </CardActions>
            </Card>
          </div>

      </div>

      <Footer />
    </div>
  );
}

export default Contact;
