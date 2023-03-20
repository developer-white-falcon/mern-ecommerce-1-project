import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Body, BackgroundImage, CategoryContainer } from './CategoryItem.styles';

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
    <div>
      <CategoryContainer onClick={navigateHandler}>
        <BackgroundImage src={imageUrl} />
        <Body>
          <h2> {title} </h2>
          <p> Shop Now </p>
        </Body>
      </CategoryContainer>
    </div>
  );
};

export default CategoryItem;
