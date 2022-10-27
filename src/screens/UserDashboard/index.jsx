import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RankCard from '../../components/RankCard'
import Loader from 'components/Loader';
import config from '../../api-config.js';

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

    async function fetchUserDetails(params) {
        try{
            setLoader(true);
            const response = await fetch(`${config.API_BASE_URL}/user/${params.email}`, {
                method:'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const userData = await response.json();
            debugger;
            if(response.status === 200){
                debugger;
                setUserDetails({...userData?.data})
            }
            setLoader(false);
        }catch(error){
            setLoader(false);
        }
    }

    useEffect(() => {
        const paramsObj = getAllQueryParams();      
        setParamsObj(paramsObj);
        fetchUserDetails(paramsObj);
    }, []);

    return <div>
    {loader ? <Loader loader={loader}/> :
    <div style={{backgroundColor: 'hsl(339, 67%, 17%)', height: '100vh'}}>
        <header style={{
            height: '50px',
            width: '100vw',
            background: 'hsl(343, 57%, 93%)',
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
            <RankCard rank={userDetails?.rank} code={userDetails?.referralcode} email={userDetails?.email}/>
        </main>
        </div>}
    </div>
};

export default UserDashboard;