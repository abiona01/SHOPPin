import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import { HomeBox } from './Home.style';
import { Products } from '../../components/products/Products';
export const Home = () => {
	return (
		<HomeBox>
			<Navbar />
			<Landing />
			<Products />
		</HomeBox>
	);
};
