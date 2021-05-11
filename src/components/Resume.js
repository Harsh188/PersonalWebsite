import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { makeStyles } from '@material-ui/core/styles';
import './Resume.css'

const useStyles = makeStyles({
  gridContainer: {
  	padding: '1%',
  },
  button: {
  	color: '#fff',
  	backgroundColor: "#9400D3",
  	margin: "auto",
  	borderColor: "#fff",
  }
});


function Cards() {
	const classes = useStyles();
	return(
		<div className='resume' id='resume'>
			<h1 className='heading'>Resume</h1>
			<Grid item container className={classes.gridContainer}
				direction="column"
				display="flex"
				justify="center">
					<Button
						varient="contained"
						size="large"
						color="default"
						className={classes.button}
						startIcon={<PictureAsPdfIcon/>}
						href="/resume"
					>
							View Resume/CV
					</Button>
			</Grid>
		</div>
	)
}

export default Cards;