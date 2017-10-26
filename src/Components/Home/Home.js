import React from 'react';
import Typography from 'material-ui/Typography';
import Youtube from '../Utils/youtube';
import Carousel from '../Utils/carousel';



const Home = () => {
  return(
    <div>
      <Carousel />
        <Typography type="display3" component="h1" color="primary" align="center" style={{'padding':'25px'}}>
          Dil Shaan
        </Typography>
        <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
          My real name is Rajat Kumar, s/o Ramesh Kumar Sippy.
          I am residing at Punjabi Bagh Kapurthalia, Punjab India.
          Music fascinated me from birth. Since the age of 3 to 4 years, I was very fond of Tabla and Harmonium.
          Started singing at the age of 8 to 10 years from the most reputed and classical singer Mr. Daler Ali ji, who is settled in Jalandhar. Still I am taking music education from guru ji.
        </Typography>
        <Typography paragraph type="headline" component='p' style={{'padding':'0px 20px'}}>
          I have done bachelor's & masters in Music, both vocal and instrumental.
          I have also participated in youth festival and other music competition in various schools and college, with 1st position and 2nd position in singing.
          First romantic Punjabi song audio and video released on 1st October, 2017 through Brown Eyes music entertainer.
          Check out the full video on Youtube.
          Presently running a music Academy. ( Talent Academy)
        </Typography>
      <div className="row col-md-offset-1 col-md-10" >
        <Youtube src="https://www.youtube.com/embed/HGATo0DYtJ4"/>
      </div>
    </div>
  )
}

export default Home;
