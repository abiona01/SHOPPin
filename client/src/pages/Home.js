import Navbar from '../components/Navbar';
import Landing from "../components/Landing"
import { HomeBox } from './Home.style';
import { Products } from '../components/Products';
export const Home = () => {
  return (
    <HomeBox>
      <Navbar />
      <Landing />
      <Products />
    </HomeBox>
  );
};
