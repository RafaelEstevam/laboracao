const moment = require('moment');
const { request, gql } = require('graphql-request');

const graphqlAPI = 'https://api-sa-east-1.graphcms.com/v2/cl514trr41c2c01ugbhr85p1h/master';

const Historic = require("../schemas/historicService");

const searchExercises = async () => {
    const query = gql`query MyQuery{
        exercises {
            id
            title
            time
            description
            repeatLimit
            type
            image {
                url
            }
        }
    }`;
    const exercises = await request(graphqlAPI, query);
    return exercises;
}

const isCurrentLessLimitHour = (current, limit) => {
    const getCurrentTime = new Date(current).getTime();
    const getLimitTime = new Date(limit).getTime();
    let isLess = getCurrentTime < getLimitTime ?? true;
    return isLess;
};

const generateListExercises = (limit, list) => {

    let exercisesList = [];

    while(exercisesList.length < limit){
        let number = parseInt(((Math.random() * (list.length))));
        let exercise = list[number];
        let exerciseFounded = exercisesList.find((item) => item.id === exercise.id);
        if(!exerciseFounded){
            exercisesList.push(exercise);
        }
    };

    return exercisesList;
}

module.exports = {
    async getHistorics(req, res) {
        let historics = await Historic.find();
        return res.json(historics);
    },

    async generateHoursbyConfig(req, res) {

        const { hour, minute } = req.body

        const currentDateOfUser = new Date();
        let listHours = [];
        let currentHours = moment(currentDateOfUser);
        const limitHours = moment(currentDateOfUser).add(24, "hours");

        while (isCurrentLessLimitHour(currentHours, limitHours)) {
            isCurrentLessLimitHour(currentHours, limitHours);
            listHours = [...listHours, ...[moment(new Date(currentHours)).format("HH:mm")]]
            currentHours = moment(currentHours).add(hour, "hours").add(minute, "minute");
        }

        return res.json({
            horaAtual: currentHours,
            horaLimite: limitHours,
            listHours
            // eMenor: eMenor
        })
    },

    async generateExercises(req, res){

        const {hands, eyes, neck, spine, arm, legsAndFeet} = req.body;

        const {exercises} = await searchExercises();

        const exerciciosPescoco = exercises.filter((item) => item.type === 'pescoco');
        const exerciciosOlhos = exercises.filter((item) => item.type === 'olhos');
        const exerciciosMaos = exercises.filter((item) => item.type === 'maos');
        const exerciciosPernas = exercises.filter((item) => item.type === 'pernasEpes');
        const exerciciosBracos = exercises.filter((item) => item.type === 'braco');
        const exerciciosColuna = exercises.filter((item) => item.type === 'coluna');

        let allExercises = [];

        if(hands > 0){
            allExercises = [...allExercises, ...generateListExercises(hands > exerciciosMaos.length ? exerciciosMaos.length : hands , exerciciosMaos)]
        };

        if(neck > 0){
            allExercises = [...allExercises, ...generateListExercises(neck > exerciciosPescoco.length ? exerciciosPescoco.length : neck, exerciciosPescoco)]
        };

        if(eyes > 0){
            allExercises = [...allExercises, ...generateListExercises(eyes > exerciciosOlhos.length ? exerciciosOlhos.length : eyes, exerciciosOlhos)]
        };

        if(spine > 0){
            allExercises = [...allExercises, ...generateListExercises(spine > exerciciosColuna.length ? exerciciosColuna.length : spine, exerciciosColuna)]
        };

        if(arm > 0){
            allExercises = [...allExercises, ...generateListExercises(arm > exerciciosBracos.length ? exerciciosBracos.length : arm, exerciciosBracos)]
        };

        if(legsAndFeet > 0){
            allExercises = [...allExercises, ...generateListExercises(legsAndFeet > exerciciosPernas.length ? exerciciosPernas.length : legsAndFeet, exerciciosPernas)]
        };

        return res.json({exercises: allExercises});
    }
}