import { ReactComponent as Star } from 'assets/icons/star.svg'
import Button from 'components/Basic/Button'
import BasicInput, { LabelStyle } from 'components/Input/BasicInput'
import useForm from 'hooks/useForm'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'
import { Box } from 'styles/Global'


const TextStyle = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  svg {
    margin-right: 16px;
  }
  @media ${device.sm} {
    display: none;
  }
`

const Form = ({ handleAddedInList }) => {
  const { user, onChangeInput, onSubmitForm } = useForm({ name: '', email: '', code: '' })

  const { name, email, code } = user

  const submitForm = () => {
    handleAddedInList({
      name, email, code
    })
  }

  return (
    <form>
      <BasicInput
        label="Name"
        name="name"
        value={name}
        onChange={onChangeInput}
        type="text"
        placeholder="Your Name"
        required
      />
      <BasicInput
        label="Email"
        name="email"
        value={email}
        onChange={onChangeInput}
        type="email"
        placeholder="Your Email"
        required
      />
      <br />
      <br />
      <LabelStyle style={{fontSize: '20px'}}>
        Have a referral ?
      </LabelStyle>
      <BasicInput
        styles={{marginTop: '15px'}}
        label="Referral code"
        name="code"
        value={code}
        onChange={onChangeInput}
        type="text"
        placeholder=""
      />
      <Box mt={50} flxRight smNone>
        <TextStyle>
          <Star />
          Required field
        </TextStyle>
      </Box>
      <Box mt={40} flxRight>
        <Button title="Join the waitlist" type="submit" onClick={submitForm}/>
      </Box>
    </form>
  )
}

export default Form
