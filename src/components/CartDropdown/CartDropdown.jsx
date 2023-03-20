import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CartDropdownContainer, CartItems } from './CartDropdown.styles';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';

import { selectCartItems } from '../../store/cart/cart.select';
import { setIsOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckout = () => {
    dispatch(setIsOpen(false));
    navigate('/checkout');
  };

  return (
    <div>
      <CartDropdownContainer>
        <CartItems>
          {cartItems.map((item) => (
            <CartItem cartItem={item} key={item.id} />
          ))}
        </CartItems>
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    </div>
  );
};

export default CartDropdown;
