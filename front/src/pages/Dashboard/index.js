import React from "react";
import {Box, Grid} from '@material-ui/core';
import CardComponent from "../../components/card.component";

const Dashboard = () =>{
    return(
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
    )
}

export default Dashboard;