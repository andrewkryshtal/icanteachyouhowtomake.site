import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import appleIcon from '../../assets/appleIcon.png'
import { BatteryComponent } from '../BatteryComponent';

export const MainHeaderComponent = ({ headerTitle, clock }) => (
  <Wrapper>
    <LeftPartWrapper>
      <Icon src={appleIcon} alt="test" />
      <WindowName>{headerTitle}</WindowName>
    </LeftPartWrapper>
    <RightPartWrapper>
      <p>{clock}</p>
      <BatteryComponent />
    </RightPartWrapper>
  </Wrapper>
)

MainHeaderComponent.propTypes = {
  headerTitle: PropTypes.string,
  clock: PropTypes.string,
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 25px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    background-color: white;
    z-index: 999;
    display: flex;
    justify-content: space-between;
`;

const LeftPartWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3px;
`

const RightPartWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`

const Icon = styled.img`
    margin-left: 15px;
    height: 18px;
`

const WindowName = styled.span`
    font-size: 18px;
    margin-left: 15px;
`
