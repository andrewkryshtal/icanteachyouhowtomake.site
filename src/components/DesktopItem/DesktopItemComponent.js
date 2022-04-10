import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FolderIcon from '../../assets/folderIcon.svg'

export const DesktopItemComponent = ({ isClickedOnce, onClickHandler, onDoubleClickHandler }) => (
  <DesktopWrapper onDoubleClick={onDoubleClickHandler} onClick={onClickHandler}>
    <Icon alt="folder icon" src={FolderIcon} />
    <IconCaption isClickedOnce={isClickedOnce}>IconName</IconCaption>
  </DesktopWrapper>
)

DesktopItemComponent.propTypes = {
  isClickedOnce: PropTypes.bool,
  onClickHandler: PropTypes.func,
  onDoubleClickHandler: PropTypes.func,
}

const DesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 80px;
    margin: 20px;
`

const Icon = styled.img`
    width: 50px;
    align-content: center;
    justify-content: center;
    display: block;
    margin: 10px auto;
`

const IconCaption = styled.p`
    text-align: center;
    background-color: ${(props) => (!props.isClickedOnce ? 'none' : 'grey')};
    color: ${(props) => (props.isClickedOnce ? 'white' : 'black')};
`
