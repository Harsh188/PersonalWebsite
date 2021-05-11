import CardItem from './HobbieCardItems'
import hobbies from '../data/hobbies.json'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Billiards, Programming, Chess, VideoGames, Addons, WeightLifting, Books, Movies } from '../style/images/index.js';
import './Hobbies.css'

const useStyles = makeStyles({
  gridContainer: {
  	paddingLeft: '20px',
  	paddingRight: '20px',
  	paddingTop: '30px',
  }
});

const imageFiles = {
	'Video Games': VideoGames,
	'Open Source': Addons,
	'Working Out': WeightLifting,
	'Reading Books': Books,
	'Movies': Movies,
	'Chess': Chess,
	'Programming': Programming,
	'Billiards': Billiards,
}


function Hobbies() {
	const classes = useStyles();
	return(
		<div className='hobbies' id="hobbies">
			<h1>My Hobbies</h1>
			<div>
				<Grid container spacing={4} className={classes.gridContainer}>
					{hobbies.map(card => (
						<Grid item key={card.id} xs={12} sm={6} md={3}>
							<CardItem card={card} imageFiles={imageFiles}/>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	)
}

export default Hobbies;