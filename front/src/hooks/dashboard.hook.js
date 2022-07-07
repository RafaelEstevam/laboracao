import React, {useState, useEffect} from 'react';
import {getUserDataInStorage, API, setUserDataInStorage} from '../services/api';
import {useHistory} from 'react-router-dom';

const DashboardHook = () => {

    const history = useHistory();
    const {term_accept, _id} = getUserDataInStorage();
    const [show, setShow] = useState(null);
    const [termContent, setTermContent] = useState('');
    const [showExercises, setShowExercises] = useState(null);
    const [term, setTerm] = useState(null);
    const [userData, setUserData] = useState({});

    const handleAcceptTerm = async () => {
        const data = {term_accept: true};
        await API.put(`/users/edit/${_id}`, data).then((response) => {
            const {_id, email, term_accept} = response.data;
            setUserDataInStorage({_id, email, term_accept});
            setShow(false);
        }).catch((e) => {
            console.log(e)
        })
    };

    const handleOpenExerciseModal = () => {
        setShowExercises(true);
    };

    const handleCloseModal = () => {
        setShowExercises(false);
    };

    useEffect(() => {
        setTerm(term_accept);
    }, []);

    useEffect(() => {
        if(term === false){
            setShow(true);
        }
    }, [term]);

    useEffect(() => {
        API.get(`/users/${_id}`).then((response) => {
            setUserData(response.data);
        }).catch((e) => {
            console.log(e)
        });
    }, [_id]);



    return {
        _id,
        show,
        setShow,
        handleAcceptTerm,
        handleCloseModal,
        userData,
        handleOpenExerciseModal,
        history,
        showExercises,
        setShowExercises,
        termContent
    }
};

export default DashboardHook;
