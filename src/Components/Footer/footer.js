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
              <Typography align='center' type="headline" color="inherit" >
                Dil Shaan <br/>
                Ph.# +91-416-XXX-XXXX <br/>
                Email: dil@dilshaan.com
              </Typography>
            </Grid>
            <Hidden smDown>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="headline" color="inherit">
                Ramesh Sippi <br/>
                Ph.# +91-416-XXX-XXXX <br/>
                Email: dil@dilshaan.com
              </Typography>
            </Grid>
            </Hidden>
            <Grid item xs={12} sm={4}>
              <Typography align='center' type="headline" color="inherit">
                Ramesh Sippi <br/>
                Ph.# +91-416-XXX-XXXX <br/>
                Email: dil@dilshaan.com
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
