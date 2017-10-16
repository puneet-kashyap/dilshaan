import React from 'react';

const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item active">
                    <img src={require('../Images/home/Radha_Soami_Canada_Meditate.jpg')} className="img-responsive" alt="Toronto"/>
                </div>

                <div className="item">
                    <img src={require('../Images/home/Radha_Soami_Canada_Mountain1.jpg')} className="img-responsive" alt="Brampton"/>
                </div>

                <div className="item">
                    <img src={require('../Images/home/Radha_Soami_Canada_Mountain3.jpg')} className="img-responsive"alt="Mississauga"/>
                </div>
                <div className="item">
                    <img src={require('../Images/home/Radha_Soami_Canada_Niagara.jpg')} className="img-responsive"alt="Mississauga"/>
                </div>
                <div className="item">
                    <img src={require('../Images/home/Radha_Soami_Canada_NortherLights.jpg')} className="img-responsive"alt="Mississauga"/>
                </div>
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
    );
}
export default Carousel;
