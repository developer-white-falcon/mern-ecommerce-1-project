import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.select';

import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';

import { CategoryView, Title } from './Category.styles.jsx';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div>
      <Title> {category.toUpperCase()} </Title>
      {isLoading 
        ? ( <Spinner /> ) 
        : (
          <CategoryView>
            {products &&
              products.map((product) => <ProductCard key={product.id} product={product} />)
            }
          </CategoryView>
        )
      }
    </div>
  );
};

export default Category;
