import React, { useState } from 'react';
import { HomePageComponent } from './HomePageComponent';
import { HeaderTitleContext } from '../../hooks/useHeaderContext';

const HomePageContainer = () => {
  const [isClickedOnce, setIsClickedOnce] = useState({})
  return (
    <HeaderTitleContext.Consumer>
      {(headerTitleValue) => (
        <HomePageComponent
          isClickedOnce={isClickedOnce}
          headerTitleValue={headerTitleValue}
          setIsClickedOnce={setIsClickedOnce}
        />
      )}
    </HeaderTitleContext.Consumer>
  )
}

export { HomePageContainer }
