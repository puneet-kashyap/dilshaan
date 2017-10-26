import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Menu, { MenuItem } from 'material-ui/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';
import Hidden from 'material-ui/Hidden';
import Contacts from 'material-ui-icons/Contacts';
import Home from 'material-ui-icons/Home';
import Album from 'material-ui-icons/Album';
import Slideshow from 'material-ui-icons/Slideshow';

const style = {
  flex: 1,
};

class Header extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <img src={require('../../Images/logo1.png')} className="img-responsive" style={{'padding':'10px'}} alt="Andy Nagpal Realtor" />
          </a>
          <Typography type="title" color="inherit" style={style} >
            <Hidden smDown>
              <Tabs centered>
                  <Tab icon={<Home />} label="Home" href="/" />
                  <Tab icon={<Slideshow />} label="Albums" href="/Albums" />
                  <Tab icon={<Album />} label="Bookings" href="/Bookings" />
                  <Tab icon={<Contacts />} label="Contact Me" href="/Contact"/>
              </Tabs>
            </Hidden>
          </Typography>
        <Typography type="headline" align="center" color="inherit" >
          Dilshaan <br/>
          +91 - 76965-71231
        </Typography>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            <MenuItem onClick={this.handleRequestClose}>Home</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>Albums</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>Contact Me</MenuItem>
        </Menu>
        </Toolbar>
        <Hidden mdUp>
          <Tabs centered>
              <Tab icon={<Home />} label="Home" href="/" />
              <Tab icon={<Slideshow />} label="Albums" href="/Albums" />
              <Tab icon={<Album />} label="Bookings" href="/Bookings" />
              <Tab icon={<Contacts />} label="Contact Me" href="/Contact"/>
          </Tabs>
        </Hidden>
      </AppBar>
    </div>
  )};
}

export default Header;
