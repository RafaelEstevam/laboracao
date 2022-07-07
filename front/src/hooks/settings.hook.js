import React, {useState, useEffect} from "react";
import DashboardHook from "./dashboard.hook";
import { API } from "../services/api";

const SettingsHook = () => {
    const {_id} = DashboardHook();

    const [userData, setUserData] = useState('');
    const [value, setValue] = useState('dom');
    const [hora1, setHora1] = useState('');
    const [hora2, setHora2] = useState('');
    const [hora3, setHora3] = useState('');
    const [hora4, setHora4] = useState('');
    const [minuto1, setMinuto1] = useState('');
    const [minuto2, setMinuto2] = useState('');
    const [minuto3, setMinuto3] = useState('');
    const [minuto4, setMinuto4] = useState('');
    const [settingList, setSettingList] = useState([]);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = {
          day: value,
          gl_start: {
            hour: hora1,
            minute: minuto1
          },
          gl_middle: {
            hour: hora2,
            minute: minuto2
          },
          gl_end: {
            hour: hora3,
            minute: minuto3
          },
          water_config: {
            hour: hora4,
            minute: minuto4
          }
      }
  
      await API.post('/hours', {hour: hora4, minute: minuto4}).then((response) => {
          const {listHours} = response.data;
          data.water_schedule = listHours;
          const filteredSettings = settingList.filter((item) => {return item.day !== value});
          setSettingList([...filteredSettings, ...[data]])
      }).catch((e) => {
          console.log(e);
      })
    }
  
    const handleEditUser = async (settingList) => {
        const data = {gl_List: settingList};
        await API.put(`/users/edit/${_id}`, data).then((response) => {
            
        }).catch((e) => {
            console.log(e)
        })
    };

    const loadStateValues = (findedSettings) => {
        console.log(findedSettings);
    }
  
    useEffect(() => {
        if(settingList.length > 0){
            handleEditUser(settingList);
        }
    }, [settingList]);

    useEffect(() => {
        API.get(`/users/${_id}`).then((response) => {
            setUserData(response.data);
        }).catch((e) => {
            console.log(e)
        })
    }, [_id]);

    useEffect(() => {

        const findedSettings = userData?.gl_List?.find((item) => {
            return item.day === value;
        });

        loadStateValues(findedSettings)

    }, [value, userData])

    return {
        value,
        hora1,
        setHora1,
        hora2,
        setHora2,
        hora3,
        setHora3,
        hora4,
        setHora4,
        minuto1,
        setMinuto1,
        minuto2,
        setMinuto2,
        minuto3,
        setMinuto3,
        minuto4,
        setMinuto4,
        handleSubmit,
        handleChange
    }
}

export default SettingsHook