import { PageWrapper } from '../../components';
import Banner from './components/banner/Banner';
import NewArrivals from './components/newArrivals/NewArrivals';
import Categorie from './components/categorie/Categorie';
import About from './components/about/About';

const Home: React.FC = () => {
  return (
    <PageWrapper appBarBgColor="#000000" showButtonTheme={false}>
      <Banner />
      <NewArrivals />
      <Categorie />
      <About />
    </PageWrapper>
  );
};

export default Home;
