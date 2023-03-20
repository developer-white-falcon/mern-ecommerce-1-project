import React from 'react';

import CategoryItem from '../CategoryItem/CategoryItem';
import { Categories } from './Directory.styles';

import { DirectoryData } from './DirectoryData';

const Directory = () => {
  return (
    <Categories>
      {DirectoryData.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Categories>
  );
};

export default Directory;
