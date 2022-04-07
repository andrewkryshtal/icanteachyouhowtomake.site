import React from 'react';
import { HomePageComponent } from './HomePageComponent';
import { HeaderTitleContext } from '../../hooks/useHeaderContext';

const HomePageContainer = () => {
  return (
    <HeaderTitleContext.Consumer>
      {(headerTitleValue) => (
        <HomePageComponent headerTitleValue={headerTitleValue} />
      )}
    </HeaderTitleContext.Consumer>
  )
}

export { HomePageContainer }
