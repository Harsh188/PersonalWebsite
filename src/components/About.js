import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import Zoom from '@material-ui/core/Zoom';
import './About.css'
import {ProfilePic} from '../style/images';
import VizSensor from 'react-visibility-sensor';

const useStyles = makeStyles({
	gridContainer: {
		padding: '8%',
		direction: "column",
		alignItems: "center",
		justify: "center",
	},
	icons: {
		color: 'white',
	}
});

function About(){
	let [active, setActive] = useState(false);
	const classes = useStyles();

	return(
		<div className='about' id="about">
			<h1 className='heading'>About Me</h1>
	            <Zoom in={true}>
	            <div>
				<Grid container className={classes.gridContainer} spacing='10'>
					<Grid item className={classes.profileImg} xs={12} sm={6} md={6} >

					        
								<img className='profileImg' src={ProfilePic} />
							<div className='icons'>

								<IconButton className={classes.icons} 
								aria-label="linkedIn" 
								onClick={() => window.open('https://www.linkedin.com/in/harsh188/')}>
									<LinkedInIcon fontSize='large'/>
								</IconButton>

								<IconButton className={classes.icons} 
								aria-label="github" 
								onClick={() => window.open('https://github.com/Harsh188')}>
									<GitHubIcon fontSize='large'/>

								</IconButton>

								<IconButton className={classes.icons} 
								aria-label="facebook" 
								onClick={() => window.open('https://www.facebook.com/hiharshith188/')}>
									<FacebookIcon fontSize='large'/>

								</IconButton>

							</div>
					</Grid>

					<Grid item className={classes.context} xs={12} sm={6} md={6}> 
						<div>
							<h3 className='heading3'>Hello there! My name is</h3>
							<h1 className='heading1'>Harshith MohanKumar</h1>
							<h3 className='heading3'>and I'm a technophile.</h3>
							<p className='aboutText'>
							 A majority of my enthusiasm for computer science has been cultivated from 
							 Marvel's superhero Iron Man and his AI assistant Jarvis. 
							 I'm currently pursuing my bachelor's degree in Computer Science Engineering 
							 with a specialization in Machine Intelligence and Data Science. 
							 After college I wish to continue my education by enrolling for graduate school. 
							 In my spare time I love to play video games, workout and learn about state of 
							 the art machine learning models.  
							</p>

							<p className='aboutText'>
								I believe that there will come a time when human intelligence will 
								merge with machine intelligence. I hope that this transition will 
								mark a beautiful evolution of mankind. By exponentially expanding 
								our cognitive capabilities our curiosity will drive new unimaginable 
								innovations.
							</p>
						</div>
					</Grid>
				</Grid>
				</div>
				</Zoom>
		</div>
	);

} 

export default About;