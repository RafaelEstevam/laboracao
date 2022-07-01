import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components';
import { Divider, InputLabel, Select } from '@material-ui/core';

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
            EXERCÍCIOS
        </Typography>
        <Typography>
            Gere uma sequência de exercícios para fazer sua Ginástica Laboral:
        </Typography>
        <div className={classes.paper}>
            <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                            <FormControl variant="filled" fullWidth className={classes.formControl}>
                                <InputLabel htmlFor="filled-age-native-simple">Exercícios para: </InputLabel>
                                <Select
                                    native
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'filled-age-native-simple',
                                    }}
                                    fullWidth
                                >
                                    <option value={''}></option>
                                    <option value={'pescoco'}>Pescoço</option>
                                    <option value={'coluna'}>Coluna</option>
                                    <option value={'mao'}>Mão</option>
                                    <option value={'olhos'}>Olhos</option>
                                    <option value={'pernas_e_pes'}>Pernas e pés</option>
                                    <option value={'bracos'}>Braços</option>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CustomFormWrapper>
                                    <Typography variant='h6'>
                                        Número mínimo (repetições):
                                    </Typography>
                                    <CustomFormWrapper>
                                        <TextField
                                            variant="outlined"
                                            required
                                            type={'number'}
                                            fullWidth
                                            id="numeroMin"
                                            size="small"
                                            label="Mín."
                                            name="numeroMin"
                                        />
                                    </CustomFormWrapper>
                                </CustomFormWrapper>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CustomFormWrapper>
                                    <Typography variant='h6'>
                                        Número máximo (repetições):
                                    </Typography>
                                    <CustomFormWrapper>
                                        <TextField
                                            variant="outlined"
                                            required
                                            type={'number'}
                                            fullWidth
                                            id="numeroMax"
                                            size="small"
                                            label="Max."
                                            name="numeroMax"
                                        />
                                    </CustomFormWrapper>
                                </CustomFormWrapper>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CustomFormWrapper>
                                    <Typography variant='h6'>
                                        Quantidade de exercícios:
                                    </Typography>
                                    <CustomFormWrapper>
                                        <TextField
                                            variant="outlined"
                                            required
                                            type={'number'}
                                            fullWidth
                                            id="numeroQtd"
                                            size="small"
                                            label="Qtd."
                                            name="numeroQtd"
                                        />
                                    </CustomFormWrapper>
                                </CustomFormWrapper>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <br/>
                                <Divider />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Incluir
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={12} sm={12}>
                            <Typography component="h2" variant="h4" color="primary" gutterBottom>
                                Lista de exercícios
                            </Typography>
                            <br/>
                            <Divider />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Gerar exercícios
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
  );
}