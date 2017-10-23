import React,  { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


export default class Inquiry extends Component {
  render() {
    return (
        <div>
        <Header />
        <section className="success" id="about">
          <div className="container">
            <div className="row col-md-offset-4 col-md-4" style={{'padding':'25px'}}>
              <Paper style={{'padding':'10px'}}>
                <Typography type="display" component="h1" color="primary" style={{'paddingBottom':'10px'}}>
                  Booking Inquiry
                </Typography>
              <p className="text-left">
                Please enter your information to book Dil Shaan's shows and performance.
              </p>
              <TextField
                required
                label="Your Name"
                placeholder="First and Last Name"
                margin="dense"
                fullWidth={true}
              /><br />
              <TextField
                required
                label="Phone No."
                placeholder="e.g. +91-416-xxx-xxxx"
                margin="dense"
                fullWidth={true}
              />
              <TextField
                required
                label="Email Address"
                placeholder="Your email address"
                margin="dense"
                fullWidth={true}
              />
              <TextField
                required
                id="date"
                label="Date"
                type="date"
                defaultValue="2017-11-24"
                margin="dense"
                fullWidth={true}
              />
              <TextField
                required
                id="time"
                label="Time"
                type="time"
                defaultValue="07:30"
                margin="dense"
                fullWidth={true}
              />
              <TextField
                multiline
                required
                id="Comments"
                label="Comments"
                rows="4"
                margin="dense"
                fullWidth={true}
                style={{'paddingBottom':'25px'}}
              />
              <Button raised
                color="primary">
                Submit
              </Button>
              </Paper>
          </div>
          </div>
        </section>
        <Footer />
        </div>
    );
  }
}
