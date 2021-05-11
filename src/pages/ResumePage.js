import React from 'react'
import '../app/style.css'
import resumePDF from '../data/HarshithMohanKumar_Resume.pdf'


function ResumePage(){
	const frameStyle = {
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: '100',
		left: '0',
		margin: '5px',
		paddingLeft: '50px',
		paddingRight: '50px',
	}

	const divStyle = {
		display: 'flex',
		height: '985px',
		backgroundColor: '#1c1b1c',
	}
	return (
		<>
			<div style={divStyle}>
				<iframe src={resumePDF} style={frameStyle} ></iframe>
			</div>
		</>
	)
}

export default ResumePage;