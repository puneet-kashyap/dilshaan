import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Youtube from '../Utils/youtube';



const Home = () => {
  return(
    <div>
      <Paper style={{'margin':'5px'}}>
        <Typography type="display3" component="h1" color="primary" align="center" style={{'padding':'25px'}}>
          Dil Shaan
        </Typography>
        <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id auctor felis. Donec tincidunt nibh enim, tempor vehicula turpis hendrerit eu. Aliquam auctor fringilla augue quis accumsan. Suspendisse nulla risus, consectetur sit amet sem vitae, sagittis imperdiet risus. Maecenas gravida dolor nec nisi iaculis, at malesuada nisi pharetra. Duis vitae cursus orci, sed gravida lectus. Vestibulum in orci tempor, bibendum diam eu, eleifend lectus. Morbi sit amet ipsum et nisl pharetra semper cursus ultrices metus.
        </Typography>
        <Typography paragraph type="headline" component='p' style={{'padding':'0px 20px 50px 20px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id auctor felis. Donec tincidunt nibh enim, tempor vehicula turpis hendrerit eu. Aliquam auctor fringilla augue quis accumsan. Suspendisse nulla risus, consectetur sit amet sem vitae, sagittis imperdiet risus. Maecenas gravida dolor nec nisi iaculis, at malesuada nisi pharetra. Duis vitae cursus orci, sed gravida lectus. Vestibulum in orci tempor, bibendum diam eu, eleifend lectus. Morbi sit amet ipsum et nisl pharetra semper cursus ultrices metus.
        </Typography>
      </Paper>
      <div className="row col-md-offset-1 col-md-10" >
        <Youtube src="https://www.youtube.com/embed/HGATo0DYtJ4"/>
      </div>
    </div>
  )
}

export default Home;
