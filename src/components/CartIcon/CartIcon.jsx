import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.select';
import { CartIconContainer, ItemCount } from './CartIcon.styles';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleDropdown = () => dispatch(setIsOpen(!isOpened));

  return (
    <div>
      <CartIconContainer onClick={toggleDropdown}>
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    </div>
  );
};

export default CartIcon;
