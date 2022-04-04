import React from 'react';
import styled from 'styled-components';
import appleIcon from '../../assets/appleIcon.png'

export const MainHeaderComponent = () => (
  <Wrapper>
    <LeftPartWrapper>
      <Icon src={appleIcon} alt="test" />
      <WindowName>test</WindowName>
    </LeftPartWrapper>
  </Wrapper>
)

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
