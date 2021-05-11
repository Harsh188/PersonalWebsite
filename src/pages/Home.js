import React from 'react'
import '../app/style.css'
import { HeroSection, About, Cards, Resume, Hobbies } from '../components'

function Home(){
	return (
		<>
			<div>
				<HeroSection />
			</div>
			<div>
				<About/>
			</div>
			<div>
				<Cards />
			</div>
			<div>
				<Resume />
			</div>
			<div>
				<Hobbies/>
			</div>
		</>
	)
}

export default Home;