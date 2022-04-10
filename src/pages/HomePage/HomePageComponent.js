import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainHeader from '../../components/MainHeader';
import DesktopItem from '../../components/DesktopItem';

const HomePageComponent = ({ headerTitleValue, isClickedOnce, setIsClickedOnce }) => {
  console.log({ isClickedOnce, setIsClickedOnce })
  return (
    <>
      <MainHeader headerTitleValue={headerTitleValue} />
      <Desktop onClick={(e) => {
        e.preventDefault()
        setIsClickedOnce(false)
      }}
      >
        <DesktopItem isClickedOnce={isClickedOnce} setIsClickedOnce={setIsClickedOnce} />
      </Desktop>
    </>
  )
}

const Desktop = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 25px;
    position: fixed;
    z-index: 10;
    opacity: 1;
    background: #e5e5f7 repeating-linear-gradient(45deg, grey 25%, transparent 25%, transparent 75%, grey 75%, grey), repeating-linear-gradient(45deg, grey 25%, #e5e5f7 25%, #e5e5f7 75%, grey 75%, grey) 0 0, 1px 1px;
    background-size: 2px 2px;
`

export { HomePageComponent }

HomePageComponent.propTypes = {
  headerTitleValue: PropTypes.shape({ headerTitleValue: PropTypes.string }),
  isClickedOnce: PropTypes.bool,
  setIsClickedOnce: PropTypes.func,
}
