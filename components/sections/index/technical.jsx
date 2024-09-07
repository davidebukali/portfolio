// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="I use multiple tools and programming languages to create amazing applications."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<BadgesBlock 
							title="Tech Stack" 
							copy="Here are the tools I use for full-cycle application development, from Frontend to Backend, including testing and deployment."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const tech	= [
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'laravel', 		name: 'Laravel', 			type: 'devicon' },
	{ key: 'django', 		name: 'Django', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'redux', 		name: 'Redux', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'cypressio', 	name: 'Cypress', 			type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: "google",		name: "Gemini AI", 			type: "devicon" },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'postgresql', 	name: 'PostgreSQL', 		type: 'devicon' },
]