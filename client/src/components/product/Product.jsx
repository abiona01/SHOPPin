import {
	ProductButton,
	ProductCard,
	ProductDetails,
	ProductName,
} from './Product.style';
import slide2 from '../../image/ivan-didenko-jxCGoUiBAiA-unsplash.jpg';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export const Product = () => {
	return (
		<ProductCard>
			<CardMedia
				component='img'
				height='200'
				image={slide2}
				alt='Product image'
			/>
			<CardContent>
				<ProductName variant='h4' component='h4'>
					Name
				</ProductName>
				<ProductDetails component='body1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</ProductDetails>
			</CardContent>
			<CardActions>
				<ProductButton variant='contained'>
					<Link to='/product/:id'>View</Link>
				</ProductButton>
				<ProductButton variant='contained'>
					<Link to='/cart'>Add to Cart</Link>
				</ProductButton>
			</CardActions>
		</ProductCard>
	);
};
