import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Data , sliderSettings } from './Teamdata';
import { Row, Heading, Section, TextWrapper }from './Teamallstyle';
import {GiSailboat} from 'react-icons/gi';
import {BsDiscord} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage } from './Teamstyle';
import './Teamsocial.css';
// import Me from '../../assets/kazuko.jpg';



const Team = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section >
			<Row id='team' justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					MIRA Team
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#D9534F' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{Data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage  src={el.image} />						
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper> 
						 <TextWrapper size="0.9rem" margin="0.7rem" color="#fff">
							{el.description}
						</TextWrapper> 
						<div className="team__social">
						<a href='https://opensea.io/' target='_blank' rel="noreferrer"><GiSailboat/></a>
						<a href='https://discord.com/' target='_blank' rel="noreferrer"><BsDiscord /></a>
						<a href='https://twitter.com/mibr_0' target='_blank' rel="noreferrer"><BsTwitter /></a>
						</div> 
						 {/* <CardButton>Learn More</CardButton>  */}
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Team;







// function Team() {
//   return (
//     <section id='team'>
//             <h5>Get To Know</h5> 
//           <h2>Our Team</h2>
//           <div class="main">  
//         <div class="profile-card">
//             <div class="img">
//                 <img src={Me}/>
//             </div>  
//             <div class="caption">
//                 <h3>Vin Diesel</h3>
//                 <p>Nft Creator</p>
  
//             </div>
//         </div>
//         <div class="profile-card">
//             <div class="img">
//                 <img src={Me}/>
//             </div>
//             <div class="caption">
//                 <h3>David Corner</h3>
//                 <p>Nft Creator</p>
 
//             </div>
//         </div>
//         <div class="profile-card">
//             <div class="img">
//                 <img src={Me}/>
//             </div>
//             <div class="caption">
//                 <h3>Tom Cruise</h3>
//                 <p>Nft Creator</p>
  
//             </div>
//         </div>
//     </div>
//     </section>
//   );
// }

// export default Team;
