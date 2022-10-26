import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RankCard from '../../components/RankCard'
import Loader from 'components/Loader';
import config from '../../api-config.js';
import axios from 'axios';

const UserDashboard = () => {

    const { search } = useLocation();
    const navigate = useNavigate();
    const [paramsObj, setParamsObj] = useState({});
    const [loader, setLoader] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    function getAllQueryParams() {
        const paramsObj = {};
       search.substring(1).split('&').forEach(param => {
        paramsObj[param.split('=')[0]] = decodeURIComponent(param.split('=')[1]);
       })
       navigate('/dashboard');
       return paramsObj;
    }

    async function fetchUserDetails() {
        try{
            setLoader(true);
            const response = await axios.get(`${config.API_BASE_URL}/user/${paramsObj.email}`);
            if(response.status === 200){
                setUserDetails({...response?.data})
            }
            setLoader(false);
        }catch(error){
            setLoader(false);
        }
    }

    useEffect(() => {       
        setParamsObj(getAllQueryParams());
        fetchUserDetails();
    }, []);
    
    return <>
    {loader ? <Loader loader={loader}/> :
    <>
        <header style={{
            height: '50px',
            width: '100vw',
            background: '#E0E0E0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 10px'
        }}>
            <div style={{flex: 1}}>
                <img 
                src='https://images.squarespace-cdn.com/content/v1/631f031f841f9516b44d8878/a0bd2fa8-b606-4f5c-ac05-d2670b879e6d/LML-Logo-1.png?format=1500w' 
                alt="lml"
                style={{height: '25px', width: '100px'}}
            />
            </div>
            <p style={{
                flex: 1.23,
                fontFamily: 'Poppins,sans-serif',
                color: '#000',
                fontWeight: 900,
                textRendering: 'optimizeSpeed'
            }}>Welcome {paramsObj?.name?.split('+')?.[0]} 🎉🎉🎉</p>
        </header>
        <main>
            <RankCard />
        </main>
        </>}
    </>
};

export default UserDashboard;