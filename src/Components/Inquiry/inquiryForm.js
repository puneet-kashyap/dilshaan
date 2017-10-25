import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Field, reduxForm } from 'redux-form'
import InquiryThanks from './inquiryThanks'

const renderField = ({ input, placeholder, label, meta: { touched, error }, ...custom }) => (
  <TextField required
    label={label}
    placeholder={placeholder}
    errorText={touched && error}
    {...input}
    {...custom}
    margin="dense"
    fullWidth={true}
  />
)

class InquiryForm extends Component {
  constructor(props){
    super(props);
    this.state={
      form:'blank'
    }
  }
  submit = () => {
    console.log('Form Submitted');
    this.setState({form:'filled'})
  }
  render () {
    if (this.state.form === 'blank') {
      return (
        <div className="row col-md-offset-4 col-md-4" style={{'padding':'25px'}}>
          <Paper style={{'padding':'10px'}}>
            <Typography type="display3" component="h1" color="primary" style={{'paddingBottom':'10px'}}>
              Booking Inquiry
            </Typography>
          <p className="text-left">
            Please enter your information to book Dil Shaan's shows and performance.
          </p>
          <form onSubmit={this.submit}>
            <Field name="Name"
              placeholder="First and Last Name"
              component={renderField}
              label="Your Name"
            />
            <Field name="Phone"
              placeholder="e.g. +91-416-xxx-xxxx"
              component={renderField}
              label="Phone No."
            />
            <Field name="Email"
              placeholder="Your email address"
              component={renderField}
              label="Email Address"
            />
          <Field name="Date"
            id="date"
            component={renderField}
            label="Date"
            type="date"
            defaultValue="2017-11-24"
            format={(v) => ((v === '') ?  null : v)}
          />
          <Field name="Time"
            id="time"
            component={renderField}
            label="Time"
            type="time"
            defaultValue="19:30"
            format={(v) => ((v === '') ?  null : v)}
          />
          <Field name="Comments"
            required={false}
            multiline
            rows="4"
            id="Comments"
            component={renderField}
            label="Comments"
            format={(v) => ((v === '') ?  null : v)}
            style={{'paddingBottom':'25px'}}
          />
          <Button raised
            type="submit"
            disabled={ this.submitting}
            color="primary">
            Submit
          </Button>
        </form>
        </Paper>
      </div>
      );
    } else {
      return (
        <InquiryThanks />
      )
    }
  }

}

export default reduxForm({
  form: 'inquiryForm',
  // validate
})(InquiryForm);
