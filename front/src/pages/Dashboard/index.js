import React from "react";
import {Box, Grid, Typography, Divider, Container} from '@material-ui/core';
import CardComponent from "../../components/card.component";

const Dashboard = () =>{
    return(
        <Container component="main" maxWidth="lg">
            <Typography component="h2" variant="h4" color="primary" gutterBottom>
                HOME
            </Typography>
            <Box pt={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <CardComponent title="Exercícios" bg={3} ajust={'-40px'} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardComponent title="Informações" bg={2} ajust={'-20px'}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardComponent title="Dicas" bg={1} ajust={'-40px'}/>
                    </Grid>
                </Grid>
            </Box>
            
        </Container>
    )
}

export default Dashboard;