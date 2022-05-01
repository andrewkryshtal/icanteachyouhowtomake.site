import React from 'react';
import PropTypes from 'prop-types';
import { DesktopItemComponent } from './DesktopItemComponent';

export const DesktopItemContainer = ({ setIsClickedOnce, isClickedOnce, id }) => {
  const onClickHandler = (e) => {
    e.stopPropagation()
    setIsClickedOnce({})
    if (!isClickedOnce[id]) {
      setIsClickedOnce({ [id]: true })
    }
  }

  const onDoubleClickHandler = () => {
    console.log('test');
  }

  return (
    <DesktopItemComponent
      isClickedOnce={isClickedOnce[id]}
      onClickHandler={onClickHandler}
      onDoubleClickHandler={onDoubleClickHandler}
    />
  )
}

DesktopItemContainer.propTypes = {
  isClickedOnce: PropTypes.shape({}),
  setIsClickedOnce: PropTypes.func,
  id: PropTypes.string,
}
