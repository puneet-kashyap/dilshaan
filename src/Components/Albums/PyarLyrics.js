import React from 'react';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';


const PyarLyrics = () => {
  return (
    <CardContent>
      <Paper>
        <Typography type="display2" component="h1" color="primary" style={{'padding':'25px'}}>
          Dilshaan's Pyar
        </Typography>
        <Typography type="caption" style={{'paddingBottom':'5px'}}>
          Lyrics by:
        </Typography>
        <Typography type="title" component="h2" color="primary" style={{'paddingBottom':'25px'}}>
          Ramesh K. Sippy,<br/>Honey Sampla
        </Typography>
        <Typography paragraph type="headline">
          Ki dasa Sohneya Sajna ve,<br/>
          kina mai tenu chahea ae.<br/>
          Mai Dil apna haan de baithi,<br/>
          bus Pyar tere nal paya ae.<br/>
        </Typography>
        <Typography paragraph type="headline">
          Tere te akhiyan tik gayian,<br/>
          pal pal tere te mardi haan.<br/>
          Mai mangea sajna Rab kolo,<br/>
          tenu Pyar bada mai kardi haan.<br/>
        </Typography>
        <Typography paragraph type="headline">
          Menu jad da tere nal Pyar hoya,<br/>
          kaleya hun ni reh sakdi haan.<br/>
          Meri rooh ta tere vich sajna,<br/>
          tetho door hona nai seh sakdi.<br/>
          tetho vakh hona nai seh sakdi.<br/>
        </Typography>
        <Typography paragraph type="headline">
          Tenu milan di khatir sohnea ve,<br/>
          nai jag kolo mai dardi haan.<br/>
          Mai mangea sajna Rab kolo,<br/>
          tenu Pyar bada mai kardi haan.<br/>
        </Typography>
        <Typography paragraph type="headline">
          Teri har gal nu mai mandi haan,<br/>
          jhatt tere bol pugga jandi.<br/>
          Tu jhootha jeha vi russ jave,<br/>
          meri jaan muthi vich a jandi.<br/>
        </Typography>
        <Typography paragraph type="headline">
          Jeh pal vi passa vatt lave,<br/>
          mai ro ro hoke bhardi haan.<br/>
          Mai mangea sajna Rab kolo<br/>
          tenu Pyar bada mai kardi haan.<br/>
        </Typography>
        <Typography paragraph type="headline">
          Koi galti hove je mere to,<br/>
          das devi na majboor hovi.<br/>
          Bhave jaan v mang lai par,<br/>
          na Honey Sampla door hovi.<br/>
        </Typography>
        <Typography paragraph type="headline">
          Dilshaan de sad ke jeundi haan,<br/>
          Sippy dukh saare jardi haan.<br/>
          Mai mangea sajna Rab kolo,<br/>
          tenu Pyar bada mai kardi haan,<br/>
          Pyar bada mai kardi haan.<br/>
        </Typography>
        <Typography>
          Contact Ramesh K. Sippy to get lyrics for your next music album.
        </Typography>
      </Paper>
    </CardContent>
  );
}

export default PyarLyrics;
