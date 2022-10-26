import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import  {generate as referralCodesGenerate} from 'referral-codes'
import Copy from '../../assets/images/copy.png';

const CardWrapper = Styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`
const CardHeader = Styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

const CardHeading = Styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const CardBody = Styled.div`
  padding-right: 32px;
  padding-left: 32px;
  textAlign: center;
`
const UpArrowUrl = 'https://www.clker.com/cliparts/E/r/B/g/6/3/up-arrow-green.svg.med.png';

const DownArrowUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1024px-Red_Arrow_Down.svg.png';

function CopyToClipBoard() {
  const copyText = document.getElementsByClassName("copyReferral")[0];
  copyText.setSelectionRange(0, 99999);
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}

function generateReferralCode(email){
  return referralCodesGenerate({
    length: 20,
    count: 1,
    charset: `0123456789${email}`,
  })[0]
}

const RankCard = ({
  isRankUp = true,
  email = "abc@xyz.com",
  name,
  code,
}) => {

    return <CardWrapper>
        <CardHeading>
          <p>
          Waitlist Rank #1298 <img src={isRankUp ? UpArrowUrl : DownArrowUrl} alt="arrow" style={{
            height: '15px',
            width: '15px'
          }}/>
            </p>
        </CardHeading>
        <CardBody>
          <div style={{width: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
              <textarea style={{overflow: 'hidden', 
              fontWeight:600, 
              flex: 1,
              }} 
              className="copyReferral" 
              cols="5"
              disabled>{code}</textarea>
            <img src={Copy} alt="copy" style={{height: '30px', width: '30px', cursor:'pointer'}}
              onClick={CopyToClipBoard}
            />
            </div>
        </CardBody>
    </CardWrapper>
}

export default RankCard;