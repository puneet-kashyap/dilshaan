import React, {Component} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import PyarAlbum from './PyarAlbum';
import Card, {CardHeader} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Video from '../Utils/video';

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
      <div className="col-md-6 text-center" style={{'padding':'15px'}}>
        <PyarAlbum />
      </div>
      <div className="col-md-6 text-center" style={{'padding':'15px'}}>
        <Card raised className="text-center">
          <Typography type="display3" component="h1" color="primary" style={{'paddingTop':'25px'}}>
            Fans' Request
          </Typography>
          <CardHeader
            subheader="Song request at Gym recorded by a fan."
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
