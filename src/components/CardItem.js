import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VizSensor from 'react-visibility-sensor';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor: "#9400D3",
  	// opacity: "80%",
  	color: "#fff",
  	height: '385px',
  	display: 'flex',
  	justifyContent: 'space-between',
  	flexDirection: 'column'
  },
  media: {
  	objectFit: 'fill',
  	height: 145,
    maxHeight: '100%',
    maxWidth: '100%'
  },
  actions: {
  	backgroundColor: '#242222',
  	color: "#fff",
  }
});

function CardItem ({ card, imageFiles }){
	let [active, setActive] = useState(false);
	const classes = useStyles();
	
	return (
		<VizSensor
            onChange={(isVisible) => {
            	console.log("change")
            	if(isVisible){
            		setActive(true);	
            	}
            }}
            minTopValue={200}
            offset={{top:0}}>
	        <Grow in={active}
          style={{ transformOrigin: '0 0 0 ' }}
          {...(active ? { timeout: (card.id*1000) } : {})}
          >
				<div>
					<Card className={classes.root} elevation={5}>
				      <CardActionArea>
				        <CardMedia
				        	component="img"
				        	className={classes.media}
				        	src={imageFiles[card.mediaTitle]}
				        />
				        <CardContent>
				          <Typography gutterBottom variant="h5" component="h2">
				            {card.title}
				          </Typography>
				          <Typography variant="body2" color="grey" component="p">
				            {card.details}
				          </Typography>
				        </CardContent>
				      </CardActionArea>
				      <CardActions className={classes.actions}>
				        <Button size="small" color="primary" onClick={() => window.open(card.url)}>
				          Learn More
				        </Button>
				      </CardActions>
				    </Card>
				</div>
			</Grow>
        </VizSensor>
	)
}

export default CardItem;