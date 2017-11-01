import React, {Component} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import PyarAlbum from './PyarAlbum';

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
        <Footer />
      </div>
    );
  }
}

export default Albums;
