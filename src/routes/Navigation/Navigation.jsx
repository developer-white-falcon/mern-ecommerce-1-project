import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.select';
import { signOutStart } from '../../store/user/user.action';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  NavCartDropdown,
} from './Navigation.styles';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());

  const currentUser = useSelector(selectCurrentUser);
  const isOpened = useSelector(selectIsCartOpen);

  return (
    <div>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'> SHOP </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon  />
        </NavLinks>
        <NavCartDropdown>{isOpened && <CartDropdown />}</NavCartDropdown>
      </NavigationContainer>
      <Outlet />
    </div>
  );
};

export default Navigation;
