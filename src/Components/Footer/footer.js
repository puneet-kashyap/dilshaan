import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden';

const Footer = () => {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between" spacing={24} style={{ margin: 5 }}>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" style={{ 'padding': '8px' }}>
                Dil Shaan
              </Typography>
              <Typography align='center' type="headline"  color="inherit" style={{ color: 'bisque'}}>
                  +91 - 76965-71231
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                  <a href={`mailto:music@dilshaan.com?Subject=Dil%20Shaan`}
                    style={{ color: 'bisque'}} target="_top">
                    music@dilshaan.com
                  </a>
              </Typography>
            </Grid>
            <Hidden lgDown>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" >
                Ramesh Sippi
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                +91-416-XXX-XXXX <br/>
                sippi@dilshaan.com
              </Typography>
            </Grid>
            </Hidden>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" style={{ 'padding': '8px' }}>
                Ramesh K. Sippy
              </Typography>
              <Typography align='center' type="headline"  color="inherit" style={{ color: 'bisque'}}>
                  +91-98145-81786
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                  <a href={`mailto:music@dilshaan.com?Subject=Ramesh%20Sippy`}
                    style={{ color: 'bisque'}} target="_top">
                    sippy@dilshaan.com
                  </a>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography align='center' type="headline"  color="inherit" >
          Copyright &copy; DilShaan {new Date().getFullYear()}<br/>
          Built with 💖 by <u><a href={`mailto:kashyap@dilshaan.com`}>DilShaan's</a></u>  Fan Club.
      </Typography>
    </div>
  );
}

export default Footer;
