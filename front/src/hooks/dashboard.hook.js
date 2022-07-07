import React, {useState, useEffect} from 'react';
import {getUserDataInStorage, API, setUserDataInStorage} from '../services/api'

const DashboardHook = () => {

    const {term_accept, _id} = getUserDataInStorage();
    const [show, setShow] = useState(null);
    const [term, setTerm] = useState(null);

    const handleAcceptTerm = async () => {
        const data = {term_accept: true};
        await API.put(`/users/edit/${_id}`, data).then((response) => {
            const {_id, email, term_accept} = response.data;
            setUserDataInStorage({_id, email, term_accept});
            setShow(false);
        }).catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        setTerm(term_accept);
    }, []);

    useEffect(() => {
        if(term === false){
            setShow(true);
        }
    }, [term]);

    return {
        _id,
        show,
        setShow,
        handleAcceptTerm
    }
};

export default DashboardHook;
