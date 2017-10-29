import React, { Component } from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Pause from 'material-ui-icons/Pause';


class AudioPlayer extends Component {
  constructor(props){
    super(props);
    this.state={
      playing:false,
      audio:new Audio(require('../../Audios/Pyar.mp3'))
    }
  }

  playMusic = () => {
    this.setState({playing:!this.state.playing})
    if (!this.state.playing){
      console.log('Music Playing');
      this.state.audio.play();
    }else {
      console.log('Music Paused');
      this.state.audio.pause();
    }

  }
  render(){
    return (
      <div>
      <Card style={{
        'display':'flex',
        'justifyContent':'space-between',
        'margin':'10px',
        'padding':'5px',
        'background':'ghostwhite'
      }}>
        <div >
          <CardContent>
            <Typography type="display1" color="primary">Pyar</Typography>
            <Typography type="headline" >
              by Dil Shaan.
            </Typography>
          </CardContent>
          <div style={{'display':'flex','alignItems':'center'}}>
            <IconButton aria-label="Previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="Play/pause" onClick={this.playMusic}>
            {this.state.playing === false ? <PlayArrowIcon style={{height: 38,width: 38}}/> : <Pause />}
            </IconButton>
            <IconButton aria-label="Next">
              <SkipNextIcon />
            </IconButton>
          </div>
        </div>
        <CardMedia
          style={{width: 150,height: 150,}}
          image="http://cdn.za.vc/covers/71327.jpg"
          title="DilShaan's Pyar"
        />
      </Card>
    </div>
    );
  }
}

export default AudioPlayer;
