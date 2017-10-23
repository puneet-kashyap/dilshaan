import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Typography from 'material-ui/Typography';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';

const Contact = () => {
  return (
    <div>
      <Header />
      <section id="contact" className="success">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                    <Typography type="display" component="h1" color="primary" style={{'paddingTop':'25px'}}>
                      Contact Me
                    </Typography>
                  </div>
              </div>
          </div>
      </section>
      <div className="col-md-6 text-center" style={{'padding':'25px'}}>
          <Card raised className="img-responsive">
            <CardHeader
              title="Dil Shaan"
              subheader="Artist, Musician, and Performer."
              color="primary"
            />
            <img src={require('../../Images/profile/profile1.jpg')}
              className="img-responsive center-block"
              alt="Dil Shaan"/>
            <CardContent>
              <Typography type="title" component="h1">
                  <p><span>
                      <br/>Punjabi Bagh
                      <br/>Kapurthala
                      <br/>Ph.# 647-xxx-xxxx
                      <br/>Email:
                      <a href={`mailto:info@dilshaan.com?Subject=Dil%20Shaan`} target="_top">info@dilshaan.com</a>
                      <br/>
                      </span>
                  </p>
              </Typography>
            </CardContent>
          </Card>
      </div>
      <Card raised>
        <CardMedia
          style={{'padding':'10px','minHeight':'500px'}}
          component='iframe'
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38541.238578956705!2d75.37513554427363!3d31.37014996739419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a4854dcaaea2b%3A0x613bdd0931c8e3c9!2sKapurthala%2C+Punjab%2C+India!5e0!3m2!1sen!2sca!4v1508520507989"
          title="Dilshaan Map"
          className="embed-responsive-item"
          frameBorder="0"
          allowFullScreen
        />
      </Card>
      <Footer />
    </div>
  );
}

export default Contact;
