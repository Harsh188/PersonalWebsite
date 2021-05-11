import CardItem from './CardItem'
import './Cards.css'
import cards from '../data/cards.json'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { recommenderSystem, RecycleNet, ChatBot, SentimentAnalysis} from '../style/images/index.js';

const useStyles = makeStyles({
  gridContainer: {
  	paddingLeft: '20px',
  	paddingRight: '20px',
  	paddingTop: '30px',
  	display: 'flex',
  }
});

const imageFiles = {
	'Recommender System' : recommenderSystem,
	'RecycleNet': RecycleNet,
	'ChatBot' : ChatBot,
	'SentimentAnalysis' : SentimentAnalysis,
}


function Cards() {
	const classes = useStyles();
	return(
		<div className='cards' id="projects">
			<h1>Check out my AMAZING projects!</h1>
			<div>
				<Grid container spacing={4} className={classes.gridContainer}>
					{cards.map(card => (
						<Grid item key={card.id} xs={12} sm={6} md={3}>
							<CardItem card={card} imageFiles={imageFiles}/>
						</Grid>
					))}
					
				</Grid>
			</div>
		</div>
	)
}

export default Cards;