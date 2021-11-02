import Navbar from '../components/Navbar';
import Landing from "../components/Landing"
import { HomeBox } from './Home.style';
export const Home = () => {
  return (
    <HomeBox>
      <Navbar />
      <Landing />
    </HomeBox>
  );
};
