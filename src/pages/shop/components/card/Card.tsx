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
  toHighLight?: string;
}

const Card: React.FC<Prop> = ({ product, toHighLight }) => {
  const { image, title, category, description } = product;

  return (
    <Wrapper>
      <ContainerImage src={image} alt={title} />
      <Body>
        <Category category={category} />
        <TitleProduct title={title} toHighLight={toHighLight} />
        <Description description={description} toHighLight={toHighLight} />
        <Footer product={product} toHighLight={toHighLight} />
      </Body>
    </Wrapper>
  );
};

export default Card;
