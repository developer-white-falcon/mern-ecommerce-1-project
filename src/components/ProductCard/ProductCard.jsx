import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { Footer, Name, Price, ProductCardContainer } from './ProductCard.styles';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.select';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const addToCartHandler = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div>
      <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
          <Name> {name} </Name>
          <Price>{price}$</Price>
        </Footer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addToCartHandler}
        >
          Add to cart
        </Button>
      </ProductCardContainer>
    </div>
  );
};

export default ProductCard;
