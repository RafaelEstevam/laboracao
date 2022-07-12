import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../styles/colors';
import {Typography, Button} from '@material-ui/core';

const AchievementsModal = styled('div')`
    display: block;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 11000;
    top: 0px;
    left: 0px;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`;

const AchievementsModalWrapper = styled('div')`
    width: 50%;
    min-height: 300px;
    margin: auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
`;

const ModalTitle = styled('div')`
    padding-bottom: 20px
`;

const ModalBody = styled('div')`
    display: flex;
    justify-content: flex-start;
    padding-bottom: 20px;
`

const ModalTitleLabel = styled(Typography)`
    color: ${COLORS.primary};
    font-size: 1.28rem;
`;

const ModalActions = styled('div')`
    display: flex;
    justify-content: space-between;
`

const ModalComponent = ({show, setShow, onClick, buttonLabel, modalTitle, children, onClose}) => {
    return show && (
        <AchievementsModal>
            <AchievementsModalWrapper className='main-background'>
                <div>
                    <ModalTitle>
                        <ModalTitleLabel className="main-text">{modalTitle}</ModalTitleLabel>
                    </ModalTitle>
                    <ModalBody>
                        {children}
                    </ModalBody>
                </div>
                <ModalActions>
                    {onClose && (
                        <Button color="primary" variant="outlined" onClick={onClose}>
                            Fechar
                        </Button>
                    )}
                    <Button color="primary" variant="contained" onClick={onClick}>
                        {buttonLabel}
                    </Button>
                </ModalActions>
            </AchievementsModalWrapper>
        </AchievementsModal>
    )
};

export default ModalComponent;