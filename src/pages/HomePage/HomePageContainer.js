import React, { useState } from 'react';
import { HomePageComponent } from './HomePageComponent';
import { HeaderTitleContext } from '../../hooks/useHeaderContext';
import MainHeader from '../../components/MainHeader';

const HomePageContainer = () => {
  const [isClickedOnce, setIsClickedOnce] = useState({})
  return (
    <HeaderTitleContext.Consumer>
      {(headerTitleValue) => (
        <>
          <MainHeader headerTitleValue={headerTitleValue} />
          <HomePageComponent
            isClickedOnce={isClickedOnce}
            headerTitleValue={headerTitleValue}
            setIsClickedOnce={setIsClickedOnce}
          />
        </>
      )}
    </HeaderTitleContext.Consumer>
  )
}

export { HomePageContainer }
