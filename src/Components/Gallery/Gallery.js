import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

import Video from '../Utils/video';

const Gallery  = () => {
  return (
    <div>
      <Header />
        <Video src={require('../../Videos/FanShow1.mp4')}
          title="Home party" subHeader="Song at home party recorded by a fan."/>
        <Video src={require('../../Videos/Dilshaan_Gym.mp4')}
          title="Fan's Request" subHeader="Song at gym recorded by a fan."/>
        <Video src={require('../../Videos/StageShow1.mp4')}
          title="Stage Show" subHeader="Song at a Stage show."/>
      <Footer />
    </div>
  );
}

export default Gallery;
