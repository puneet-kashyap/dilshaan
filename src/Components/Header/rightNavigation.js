import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const options = [
  'Home',
  'Albums',
  'Bookings',
  'Contact',
  'Gallery',
];

class RightNavigation extends React.Component {
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

  selectLink = event => {
    console.log(event);
  }

  render() {
    return (
      <div>
        <IconButton color="inherit"
          aria-label="More"
          aria-owns={this.state.open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          PaperProps={{
            style: {
              width: 150,
              fontSize: '14px'
            },
          }}
        >
          {options.map(option => (
            <MenuItem style={{'fontSize':'15px','font-weight':'500px'}} key={option} onClick={this.selectLink}>
              <a href={`/${option}`} style={{'color':'#3f51b5','font-weight':'500'}} >
                {option.toUpperCase()}
              </a>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default RightNavigation;
