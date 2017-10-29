import React, {Component} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import PyarAlbum from './PyarAlbum';
import Card, {CardHeader} from 'material-ui/Card';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';
import Video from '../Utils/video';

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
        <PyarAlbum />
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
      <Footer />
    </div>
  );
  }
}

export default Albums;
