import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Hidden from 'material-ui/Hidden';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import Home from 'material-ui-icons/Home';
import Album from 'material-ui-icons/Album';
import Slideshow from 'material-ui-icons/Slideshow';
import LibraryMusic from 'material-ui-icons/LibraryMusic';

import RightNavigation from './rightNavigation';

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
                  <Tab icon={<PersonPinIcon />} label="Contact Me" href="/Contact"/>
                  <Tab icon={<LibraryMusic />} label="Gallery" href="/Gallery"/>
              </Tabs>
            </Hidden>
          </Typography>
          <Typography type="headline" align="center" color="inherit" style={{'display':'flex','alignItems':'inherit'}}>
              <RightNavigation />
          </Typography>
        </Toolbar>
        <Hidden mdUp >
          <Tabs scrollable fullWidth>
              <Tab icon={<Home />} label="Home" href="/" />
              <Tab icon={<Slideshow />} label="Albums" href="/Albums" />
              <Tab icon={<Album />} label="Bookings" href="/Bookings" />
              <Tab icon={<PersonPinIcon />} label="Contact Me" href="/Contact"/>
              <Tab icon={<LibraryMusic />} label="Gallery" href="/Gallery"/>
          </Tabs>
        </Hidden>
      </AppBar>
    </div>
  )};
}

export default Header;
