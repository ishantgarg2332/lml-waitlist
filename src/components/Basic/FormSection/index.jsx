import Form from 'components/Basic/Form'
import { useState } from 'react'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints';
import Loader from '../../../components/Loader'
import axios from 'axios';
import history from '../../../History';
import config from '../../../api-config.js';

const FormSectionStyle = styled.section`
  width: 650px;
  margin: 0 auto;
  padding: 50px 30px 30px 30px;
  @media ${device.lg} {
    width: 550px;
  }
  @media ${device.md} {
    width: 500px;
    width: 100%;
  }
  @media ${device.sm} {
    padding-bottom: 200px;
    padding-top: 0;
  }
`

const FormWrapper = styled.div`
  margin-top: 17vh;
  @media ${device.lg} {
  }
  @media ${device.sm} {
    margin-top: 10px;
  }
`

const FormSection = () => {
  const [loader, setLoader] = useState(false)

  const handleAddedInList = async ({name, email, code}) => {
    if(!name || !email) return;
    try{
      setLoader(true);
      await axios.post(`${config.API_BASE_URL}/user`, {
        name,
        email,
        code
      }, {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      });
      window.location.assign(`http://localhost:3000/dashboard?email=${email}&name=${name}`);
    setLoader(false);
    }catch(err){
      setLoader(false);
      console.log(err);
      window.location.href = 'https://www.lmlemotion.com/'
    }
  }

  return (
    <FormSectionStyle>
      <Loader loader={loader}/>
      <FormWrapper>
          <Form handleAddedInList={handleAddedInList} />
      </FormWrapper>
    </FormSectionStyle>
  )
}

export default FormSection
