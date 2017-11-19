import React from 'react';
import Typography from 'material-ui/Typography';
import Youtube from '../Utils/youtube';
import Carousel from '../Utils/carousel';
import Hidden from 'material-ui/Hidden';

const Home = () => {
  return(
    <div >
      <Hidden smUp>
        <Carousel sliderImages='small'/>
      </Hidden>
      <Hidden only="xs">
        <Carousel sliderImages='big'/>
      </Hidden>
      <div className="row col-md-offset-1 col-md-10">
          <Typography type="display3" component="h1" color="primary" align="center" style={{'padding':'25px'}}>
            Dilshaan
          </Typography>
          <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
            Music fascinated me from birth.
            Since the age of 3, I was very fond of Tabla and Harmonium.
            Under the guidance of most reputed and classical singer Mr. Daler Ali ji, I have been singing from the age of 8 years.
          </Typography>
          <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
            Music is in our genes as my father Ramesh K.
            Sippy is also in Punjabi music industry as a well known lyricist who always encourage me to continue my passion of singing.
            My father and brother Rajan Kumar, are the big force behind me to convert my passion into profession.
          </Typography>
          <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
            I have done bachelor's & masters in Music, both vocal and instrumental.
            I also took part in many competition such as school competition, inter school competition, and many youth festivals in which I got huge appreciation along with many prizes.
          </Typography>
          <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
            With the blessings of my Guru ji and support of my family & friends, my first romantic punjabi video song was released in October 2017 through Brown Eyes music entertainer.
          </Typography>
      </div>
      <div className="row col-md-offset-1 col-md-10" >
        <Youtube src="https://www.youtube.com/embed/HGATo0DYtJ4"/>
      </div>
    </div>
  )
}

export default Home;
