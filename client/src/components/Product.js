import {
	ProductButton,
	ProductCard,
	ProductDetails,
	ProductName,
} from './Product.style';
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
				image='https://images.unsplash.com/photo-1624265853364-12b264a2f903?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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
