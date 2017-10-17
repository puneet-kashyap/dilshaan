import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';
import Hidden from 'material-ui/Hidden';

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
    const { value } = this.state;
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <img src={require('../../Images/logo1.png')} className="img-responsive" style={{'padding':'10px'}} alt="Andy Nagpal Realtor" />
          <Typography type="title" color="inherit" style={style} >
            {/* Dilshaan */}
          </Typography>
          <Hidden only="xs">
            <Button
              aria-owns={this.state.open ? 'simple-menu' : null}
              aria-haspopup="true"
              color='contrast'
              onClick={this.handleClick}
            >
            <IconButton color='contrast'>
              <MenuIcon />
            </IconButton>
            Menu
          </Button>
        </Hidden>
        <Hidden only="sm">
          Dilshaan <br/>
          416-xxx-xxxx
        </Hidden>


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
          <Tabs centered scrollable value={value} onChange={this.handleChange}>
              <Tab label="Home" />
              <Tab label="Shows" />
              <Tab label="Albums" />
              <Tab label="Schedules" />
              <Tab label="Bookings" />
              <Tab label="Contact Me" href="#basic-tabs" />
          </Tabs>
      </AppBar>
    </div>
  )};
}

export default Header;
