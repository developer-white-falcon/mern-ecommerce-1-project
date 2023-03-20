import ProductCard from '../ProductCard/ProductCard';
import { Preview, PreviewContainer, Title } from './CategoryPreview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <div>
      <PreviewContainer>
        <h2>
          <Title to={title}> {title.toUpperCase()} </Title>
        </h2>
        <Preview>
          {products            
            .map((product, id) => (
              <ProductCard key={id} product={product} />
            ))}
        </Preview>
      </PreviewContainer>
    </div>
  );
};

export default CategoryPreview;
