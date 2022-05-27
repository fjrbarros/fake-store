import { IProductData } from '../../../../shared';
import ContainerImage from './containerImage/ContainerImage';
import Category from './category/Category';
import TitleProduct from './titleProduct/TitleProduct';
import Description from './description/Description';
import Footer from './footer/Footer';
import Body from './body/Body';
import Wrapper from './wrapper/Wrapper';

interface Prop {
  product: IProductData;
}

const Card: React.FC<Prop> = ({ product }) => {
  const { image, title, category, description } = product;
  return (
    <Wrapper>
      <ContainerImage src={image} alt={title} />
      <Body>
        <Category category={category} />
        <TitleProduct title={title} />
        <Description description={description} />
        <Footer product={product} />
      </Body>
    </Wrapper>
  );
};

export default Card;
