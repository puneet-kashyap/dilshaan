import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


const InquiryThanks = () => {
  return (
    <div className="row col-md-offset-4 col-md-4" style={{'padding':'25px'}}>
      <Paper style={{'padding':'10px'}}>
        <Typography type="display3"  align="center" component="h1" color="primary" style={{'paddingBottom':'15px'}}>
          Thank You.
        </Typography>
      <p className="text-left">
        One of the Dil Shaan's event manager will get in touch with your shortly.
      </p>
      <p className="text-left">
        I appreciate your interest in booking my show in your city.
      </p>
      <Typography type="display3" align='right' component="h1" color="primary"
        style={{'padding':'10px', 'font-family':'Ruthie'}}>
        Dil Shaan.
      </Typography>
    </Paper>
  </div>
  );
}

export default InquiryThanks;
