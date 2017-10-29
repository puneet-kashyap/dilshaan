import React, {Component} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Youtube from '../Utils/youtube';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AudioPlayer from '../Utils/audio'
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';

import Paper from 'material-ui/Paper';

class Albums extends Component {
  constructor(props){
    super(props);
    this.state={
      expanded:false
    }
  }

  clickedIcon = () => {
    if (this.state.expanded){
      this.setState({expanded:false})
    } else {
      this.setState({expanded:true})
    }

  }

  render() {
  return (
    <div>
      <Header />
        <div className="row col-md-offset-3 col-md-6 text-center" style={{'padding':'25px'}}>
            <Card raised>
              <Typography type="display3" component="h1" color="primary" style={{'padding':'25px'}}>
                Dilshaan's Pyaar
              </Typography>
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
                <Typography paragraph>
                  Record breaking album with the beautiful voice of Dilshaan.
                </Typography>
                <Typography paragraph>
                  <b>Song:</b>  Pyar<br/>
                  <b>Album:</b>   Pyar<br/>
                  <b>Artist:</b>  Dilshaan<br/>
                  <b>Label:</b>   Brown Eyes Music<br/>
                  <b>Music/Composed By:</b>   Jassi Nehaluwal<br/>
                  <b>Lyrics By:</b>   Ramesh K. Sippy, Honey Sampla
                </Typography>
              </CardContent>
              <CardActions style={{"justifyContent":"space-around"}}>
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
                <Button dense
                  color="primary"
                  aria-label="Show more"
                  onClick={this.clickedIcon}>
                  Lyrics
                  {this.state.expanded === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </Button>
              </CardActions>
              <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                  <CardContent>
                    <Paper>
                      <Typography type="display2" component="h1" color="primary" style={{'padding':'25px'}}>
                        Dilshaan's Pyar
                      </Typography>
                      <Typography type="caption" style={{'paddingBottom':'5px'}}>
                        Lyrics by:
                      </Typography>
                      <Typography type="title" component="h2" color="primary" style={{'paddingBottom':'25px'}}>
                        Ramesh K. Sippy,<br/>Honey Sampla
                      </Typography>
                      <Typography paragraph type="headline">
                        Ki dasa Sohneya Sajna ve,<br/>
                        kina mai tenu chahea ae.<br/>
                        Mai Dil apna haan de baithi,<br/>
                        bus Pyar tere nal paya ae.<br/>
                      </Typography>
                      <Typography paragraph type="headline">
                        Tere te akhiyan tik gayian,<br/>
                        pal pal tere te mardi haan.<br/>
                        Mai mangea sajna Rab kolo,<br/>
                        tenu Pyar bada mai kardi haan.<br/>
                      </Typography>
                      <Typography paragraph type="headline">
                        Menu jad da tere nal Pyar hoya,<br/>
                        kaleya hun ni reh sakdi haan.<br/>
                        Meri rooh ta tere vich sajna,<br/>
                        tetho door hona nai seh sakdi.<br/>
                        tetho vakh hona nai seh sakdi.<br/>
                      </Typography>
                      <Typography paragraph type="headline">
                        Tenu milan di khatir sohnea ve,<br/>
                        nai jag kolo mai dardi haan.<br/>
                        Mai mangea sajna Rab kolo,<br/>
                        tenu Pyar bada mai kardi haan.<br/>
                      </Typography>
                      <Typography paragraph type="headline">
                        Teri har gal nu mai mandi haan,<br/>
                        jhatt tere bol pugga jandi.<br/>
                        Tu jhootha jeha vi russ jave,<br/>
                        meri jaan muthi vich a jandi.<br/>
                      </Typography>
                      <Typography paragraph type="headline">
                        Jeh pal vi passa vatt lave,<br/>
                        mai ro ro hoke bhardi haan.<br/>
                        Mai mangea sajna Rab kolo<br/>
                        tenu Pyar bada mai kardi haan.<br/>
                      </Typography>
                      <Typography paragraph type="headline">
                        Koi galti hove je mere to,<br/>
                        das devi na majboor hovi.<br/>
                        Bhave jaan v mang lai par,<br/>
                        na Honey Sampla door hovi.<br/>
                      </Typography>
                      <Typography paragraph type="headline">
                        Dilshaan de sad ke jeundi haan,<br/>
                        Sippy dukh saare jardi haan.<br/>
                        Mai mangea sajna Rab kolo,<br/>
                        tenu Pyar bada mai kardi haan,<br/>
                        Pyar bada mai kardi haan.<br/>
                      </Typography>
                      <Typography>
                        Contact Ramesh K. Sippy to get lyrics for your next music album.
                      </Typography>
                    </Paper>
                  </CardContent>
                </Collapse>
            </Card>
        </div>
      <Footer />
    </div>
  );
  }
}

export default Albums;
