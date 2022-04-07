import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import appleIcon from '../../assets/appleIcon.png'

export const MainHeaderComponent = ({ headerTitle, setHeaderTitle }) => (
  <Wrapper>
    <LeftPartWrapper>
      <Icon src={appleIcon} alt="test" />
      <WindowName>{headerTitle}</WindowName>
      <button type="button" onClick={() => setHeaderTitle({ type: 'set', title: 'test123' })}>test btn</button>
    </LeftPartWrapper>
  </Wrapper>
)

MainHeaderComponent.propTypes = {
  headerTitle: PropTypes.string,
  setHeaderTitle: PropTypes.func,
}

const Wrapper = styled.div`
    height: 25px;
    border-bottom: 1px solid black;
`;

const LeftPartWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
`

const Icon = styled.img`
    margin-left: 15px;
    height: 18px;
`

const WindowName = styled.span`
    font-size: 18px;
    margin-left: 15px;
`
