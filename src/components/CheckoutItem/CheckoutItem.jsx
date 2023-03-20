import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeItem, addItemToCart, decrementItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.select';

import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
  
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const removeHandler = () => dispatch(removeItem(cartItems, cartItem));
  const incrementHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementHandler = () => dispatch(decrementItem(cartItems, cartItem));

  return (
    <div>
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan> {name} </BaseSpan>
        <Quantity>
          <Arrow onClick={decrementHandler}> &#10094; </Arrow>
          <Value> {quantity} </Value>
          <Arrow onClick={incrementHandler}> &#10095; </Arrow>
        </Quantity>
        <BaseSpan> {price} </BaseSpan>
        <RemoveButton onClick={removeHandler}> &#10005; </RemoveButton>
      </CheckoutItemContainer>
    </div>
  );
};

export default CheckoutItem;
