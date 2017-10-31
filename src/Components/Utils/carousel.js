import React from 'react';
import Grid from 'material-ui/Grid';

const sliderDesktop = [
  require('../../Images/slider/Dilshaan19.jpg'),
  require('../../Images/slider/Dilshaan20.jpg'),
  require('../../Images/slider/Dilshaan4.jpg'),
  require('../../Images/slider/Dilshaan10.jpg'),
  require('../../Images/slider/Dilshaan22.jpg'),
  require('../../Images/slider/Dilshaan23.jpg'),
]

const sliderMobile = [
  require('../../Images/slider/Dilshaan6.jpg'),
  require('../../Images/slider/Dilshaan11.jpg'),
  require('../../Images/slider/Dilshaan12.jpg'),
  require('../../Images/slider/Dilshaan13.jpg'),
  // require('../../Images/slider/Dilshaan14.jpg'),
  require('../../Images/slider/Dilshaan21.jpg'),
  require('../../Images/slider/Dilshaan2.jpg')
]

const Carousel = (props) => {
  let slider = sliderMobile
  let firstPic = require('../../Images/slider/Dilshaan1.jpg')
  if (props.sliderImages === 'big') {
    slider = sliderDesktop
    firstPic = require('../../Images/slider/pyar1.jpg')
  }
    return (
      <Grid container>
        <Grid item xs={12}>
        <div className="row col-md-offset-1 col-md-10" >
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
            <div className="carousel-inner" style={{'width':'100%'}}>
                <div className="item active">
                    <img src={firstPic} className="img-responsive" alt="Dilshaan"/>
                </div>
                {slider.map(item =>
                      <div key={item} className="item">
                        <img src={item} className="img-responsive" alt="Dilshaan"/>
                      </div>
                )}
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
      </div>
    </Grid>
    </Grid>
    );
}
export default Carousel;
