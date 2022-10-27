import Form from 'components/Basic/Form'
import { useState } from 'react'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints';
import Loader from '../../../components/Loader'
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
      await fetch(`${config.API_BASE_URL}/user`, { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        crossDomain: true
      },
      body: JSON.stringify({
        name,
        email,
        code
      })
    });
      window.location.assign(`http://localhost:3000/dashboard?email=${email}&name=${name}`);
    setLoader(false);
    }catch(err){
      setLoader(false);
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
