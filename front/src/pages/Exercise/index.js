import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import styled from 'styled-components';
import { Divider, Box, Button } from '@material-ui/core';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';

import mockImage from '../../assets/1.png';

const CustomRadioGroup = styled(RadioGroup)`
    flex-direction: row;
`;

const CustomFormWrapper = styled('div')`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    paddingTop: theme.spacing(3)
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [value, setValue] = useState('dom');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="lg">
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
            PESCOÇO A1
        </Typography>
        <Typography>
            15 segundos
        </Typography>
        <div className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box pt={2}>
                        <img src={mockImage} style={{width: '100%'}} alt="img" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box pt={2}>
                        <Typography>
                            Em pé ou sentado, pés bem apoiados no chão e afastados na linha do quadril, coluna ereta, lentamente vire a cabeça olhando para a direita, levando o queixo na altura do ombro. Mantenha nesta posição. Respire naturalmente.
                        </Typography>
                        <br/>
                        <Divider />
                        <div className={classes.root}>
                            <Button variant="contained" size='medium' color="default">
                                <SkipPreviousIcon />
                            </Button>
                            <Button variant="contained" size='medium' color="secondary">
                                <StopIcon />
                            </Button>
                            <Button variant="contained" size='medium' color="primary">
                                <PlayArrowIcon />
                            </Button>
                            <Button variant="contained" size='medium' color="secondary">
                                <PauseIcon />
                            </Button>
                            <Button variant="contained" size='medium' color="default">
                                <SkipNextIcon />
                            </Button>
                        </div>
                    </Box>
                    
                </Grid>
            </Grid>
        </div>
    </Container>
  );
}