import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LandingBox } from './Landing.style';
import slide3 from '../../image/altumcode-Ui3zMjpMrmM-unsplash.jpg';
import slide2 from '../../image/ivan-didenko-jxCGoUiBAiA-unsplash.jpg';
import slide1 from '../../image/mike-petrucci-c9FQyqIECds-unsplash.jpg';
import slide4 from '../../image/sam-o-leary-RCQ6rHPBrOY-unsplash.jpg';
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
export default function Landing(props) {
	return (
		<LandingBox>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={props.deviceType !== 'mobile' ? true : false}
				autoPlaySpeed={5000}
				keyBoardControl={true}
				customTransition='all .8'
				transitionDuration={1000}
				containerClass='carousel-container'
				removeArrowOnDeviceType={['tablet', 'mobile']}
				deviceType={props.deviceType}
				dotListClass='custom-dot-list-style'
				itemClass='carousel-item-padding-40-px'
			>
				<img src={slide1} alt='carousel item 1' />
				<img src={slide2} alt='carousel item 2' />
				<img src={slide3} alt='carousel item 3' />
				<img src={slide4} alt='carousel item 4' />
			</Carousel>
		</LandingBox>
	);
}
