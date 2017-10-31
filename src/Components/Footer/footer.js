import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden';
import { connect } from 'react-redux';

const Footer = (props) => {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between" spacing={24} style={{ margin: 5 }}>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" style={{ 'padding': '8px' }}>
                {props.owner.owner1.name}
              </Typography>
              <Typography align='center' type="headline"  color="inherit" style={{ color: 'bisque'}}>
                  {props.owner.owner1.phone}
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                  <a href={`mailto:${props.owner.owner1.name}?Subject=Dilshaan`}
                    style={{ color: 'bisque'}} target="_top">
                    {props.owner.owner1.email}
                  </a>
              </Typography>
            </Grid>
            <Hidden lgDown>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" >
                {props.owner.owner2.name}
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                {props.owner.owner2.phone} <br/>
                sippi@dilshaan.com
              </Typography>
            </Grid>
            </Hidden>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" style={{ 'padding': '8px' }}>
                {props.owner.owner2.name}
              </Typography>
              <Typography align='center' type="headline"  color="inherit" style={{ color: 'bisque'}}>
                  {props.owner.owner2.phone}
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                  <a href={`mailto:${props.owner.owner2.email}?Subject=Ramesh%20Sippy`}
                    style={{ color: 'bisque'}} target="_top">
                    {props.owner.owner2.email}
                  </a>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography align='center' type="headline"  color="inherit" >
          Copyright &copy; Dilshaan {new Date().getFullYear()}<br/>
          Built with 💖 by <u><a href={`mailto:kashyap@dilshaan.com`}>DilShaan's</a></u>  Fan Club.
      </Typography>
    </div>
  );
}

const mapStateToProps = (state) => {
   return {owner: state.users};
}

export default connect(mapStateToProps)(Footer);
