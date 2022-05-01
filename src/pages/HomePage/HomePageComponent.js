import React from 'react';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import DesktopItem from '../../components/DesktopItem';

const HomePageComponent = ({ isClickedOnce, setIsClickedOnce }) => {
  return (
    <Desktop onClick={(e) => {
      e.preventDefault()
      setIsClickedOnce({})
    }}
    >
      <DesktopItem id="courseFolder" isClickedOnce={isClickedOnce} setIsClickedOnce={setIsClickedOnce} />
      <DesktopItem id="aboutFolder" isClickedOnce={isClickedOnce} setIsClickedOnce={setIsClickedOnce} />
    </Desktop>
  )
}

const Desktop = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 25px;
    position: fixed;
    background: rgba(51,51,51,0.7);
    z-index: 10;
    background-color: #e5e5f7;
    opacity: 1;
    background-position: 0 0, 1px 1px;
    background-size: 2px 2px;
`

export { HomePageComponent }

HomePageComponent.propTypes = {
  headerTitleValue: PropTypes.shape({ headerTitleValue: PropTypes.string }),
  isClickedOnce: PropTypes.shape({ [string]: PropTypes.bool }),
  setIsClickedOnce: PropTypes.func,
}
