import React from 'react';
import {Box, Card, CardContent, Typography} from '@material-ui/core';
import Modal from './modal.component';

const ExercisesModal = ({setShow, show, handleCloseModal, buttonLabel, modalTitle, userData}) => {
    return (
        <Modal {...{setShow, show, onClick: handleCloseModal, buttonLabel, modalTitle}}>
            {userData?.exercises?.map((item) => (
                <Box pr={2} key={item.exercise}>
                    <Card>
                        <CardContent>
                            <Box>
                                <Typography variant="h5">
                                    {item.nomeDoExercicio}
                                </Typography>
                                <Typography>
                                    Nº repetições: <b>{item.repeticoesMaximas}</b>
                                </Typography>
                            </Box>
                            <Box display={'flex'} style={{gap: '8px'}}>
                                {item.exercises.map((subitem) => (
                                    <Box pt={2} key={subitem.title}>
                                        <Card>
                                            <CardContent>
                                                <Typography>
                                                    {subitem.title}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Modal>
    )
};

export default ExercisesModal;

