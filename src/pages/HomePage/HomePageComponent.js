import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from '../../components/MainHeader';

const HomePageComponent = ({ headerTitleValue }) => {
  return (
    <MainHeader headerTitleValue={headerTitleValue} />
  )
}

export { HomePageComponent }

HomePageComponent.propTypes = {
  headerTitleValue: PropTypes.string,
}
