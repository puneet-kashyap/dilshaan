import React, {Component} from 'react';
import Youtube from '../Utils/youtube';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AudioPlayer from '../Utils/audio';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import PyarLyrics from './PyarLyrics';

class PyarAlbum extends Component {
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
    <Card raised>
      <Typography type="display3" component="h1" color="primary" style={{'padding':'25px'}}>
        Dilshaan's Pyaar
      </Typography>
      <CardHeader
        style={{'padding':'0px'}}
        subheader="Listen it Online."
      />
      <AudioPlayer src={require('../../Audios/Pyar.mp3')}/>
      <CardHeader
        style={{'paddingBottom':'0px'}}
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
        <Typography>
          <b>Song:</b>  Pyar<br/>
          <b>Album:</b>   Pyar<br/>
          <b>Artist:</b>  Dilshaan<br/>
          <b>Label:</b>   Brown Eyes Music<br/>
          <b>Music/Composed By:</b>   Jassi Nihaluwal<br/>
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
        <PyarLyrics />
      </Collapse>
    </Card>
  );
  }
}

export default PyarAlbum;
