import { Heading, ProductsBox } from './Products.style';
import Grid from '@mui/material/Grid';
import { Product } from '../product/Product';

export const Products = () => {
	return (
		<ProductsBox>
			<Heading variant='h2' component='h2'>
				Latest Products...
			</Heading>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Product />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Product />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Product />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Product />
				</Grid>
			</Grid>
		</ProductsBox>
	);
};
