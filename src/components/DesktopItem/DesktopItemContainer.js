import React from 'react';
import PropTypes from 'prop-types';
import { DesktopItemComponent } from './DesktopItemComponent';

export const DesktopItemContainer = ({ setIsClickedOnce, isClickedOnce }) => {
  const onClickHandler = (e) => {
    e.stopPropagation()
    if (!isClickedOnce) {
      setIsClickedOnce(true)
    }
  }

  const onDoubleClickHandler = () => {
    console.log('test');
  }

  return (
    <DesktopItemComponent
      isClickedOnce={isClickedOnce}
      onClickHandler={onClickHandler}
      onDoubleClickHandler={onDoubleClickHandler}
    />
  )
}

DesktopItemContainer.propTypes = {
  isClickedOnce: PropTypes.bool,
  setIsClickedOnce: PropTypes.func,
}
