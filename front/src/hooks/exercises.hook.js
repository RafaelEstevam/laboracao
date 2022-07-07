import React, {useEffect, useState} from 'react';
import {API} from '../services/api'
import DashboardHook from './dashboard.hook';

const ExercisesHook = () => {

    const {_id} = DashboardHook();
    const [value, setValue] = useState('');
    const [quantity, setQuantity] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
    const [generatedExercises, setGeneratedExercises] = useState([]);

    const translateExercise = (exercise) => {
        switch(exercise){
            case 'neck':
                return 'Pescoço';
            case 'spine':
                    return 'Coluna';
            case 'hands':
                return 'Mãos';
            case 'eyes':
                return 'Olhos';
            case 'legsAndFeet':
                return 'Pernas e pés';
            case 'arm':
                return 'Braços';
            default:
                return '';
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredSettings = exerciseList.filter((item) => {return item.exercise !== value});
        setExerciseList([...filteredSettings, ...[{exercise: value, quantity}]])
    }

    const handleDeleteExercise = (exercise) => {
        const filteredSettings = exerciseList.filter((item) => {return item.exercise !== exercise});
        setExerciseList([...filteredSettings]);
    }

    const handleGenerateExercise = () =>{
        let data = {};

        exerciseList.map((item) => {
            data[item.exercise] = item.quantity
        });

        API.post('/exercises', data).then((response) => {
            setGeneratedExercises(response.data);
        }).catch((e) => {
            console.log(e)
        })
    };

    useEffect(() => {
        const {exercises} = generatedExercises;

        if(exercises?.length > 0){
            API.put(`/users/edit/${_id}`, {exercises: exercises}).then((response) => {
            
            }).catch((e) => {
                console.log(e);
            });
        }
    }, [generatedExercises])

    return {
        value,
        setValue,
        quantity,
        setQuantity,
        exerciseList,
        setExerciseList,
        translateExercise,
        handleChange,
        handleSubmit,
        handleDeleteExercise,
        handleGenerateExercise
    }
};

export default ExercisesHook;
