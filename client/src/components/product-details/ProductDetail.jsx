import slide2 from '../../image/ivan-didenko-jxCGoUiBAiA-unsplash.jpg';
import Grid from '@mui/material/Grid';
import {
	DetailBox,
	ProductDetailsBox,
	ProductInfoBox,
	ProductInfoBoxChild,
} from './ProductDetail.style';
import { Typography } from '@mui/material';
export const ProductDetail = () => {
	return (
		<DetailBox>
			<Grid container spacing={5} justifyContent='center'>
				<Grid item lg={3}>
					<img src={slide2} alt='slide' />
				</Grid>
				<Grid item lg={3}>
					<ProductDetailsBox style={{ backgroundColor: '#ffffff' }}>
						<Typography variant='body1'>Name</Typography>
						<Typography variant='body2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
							vitae eius distinctio veniam temporibus qui, accusamus id
							repudiandae doloribus dolor.
						</Typography>
					</ProductDetailsBox>
				</Grid>
				<Grid item lg={3}>
					<ProductInfoBox style={{ backgroundColor: '#ffffff' }}>
						<ProductInfoBoxChild>
							<Typography varaint='body2'>Price</Typography>
							<Typography varaint='body2'>&#8358;8,000</Typography>
						</ProductInfoBoxChild>
						<ProductInfoBoxChild>
							<Typography varaint='body2'>Status</Typography>
							<Typography varaint='body2'>In Stock</Typography>
						</ProductInfoBoxChild>
						<ProductInfoBoxChild>
							<Typography varaint='body2'>Qty</Typography>
						</ProductInfoBoxChild>
					</ProductInfoBox>
				</Grid>
			</Grid>
		</DetailBox>
	);
};
