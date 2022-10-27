import Styled from 'styled-components';
import Copy from '../../assets/images/copy.png';
import toast, { Toaster } from 'react-hot-toast';
import { 
  FacebookShareButton, 
  WhatsappShareButton, 
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon
} from 'react-share';

import Config from '../../api-config';
import axios from 'axios';

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

function CopyToClipBoard() {
  const copyText = document.getElementsByClassName("copyReferral")[0];
  const input = document.createElement("textarea");
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  input.remove();
  toast.success('Copied!')
}


const RankCard = ({
  email,
  code,
  rank,
}) => {
  const shareUrl = `https://lml-waitlist.vercel.app/?code=${code}`

  const shareQuote= 'Checkout LML\'s new EV with exciting features';

  function updateServerOnShareAction(app) {
    axios.patch(`${Config.API_BASE_URL}/user/${email}`, {
      shareChannel: app
    }).then().catch(() => {}) 
  }

    return <CardWrapper>
      <Toaster />
        <CardHeading>
          <p>
          Waitlist Rank #{rank}
            </p>
        </CardHeading>
        <CardBody>
          <div style={{
            width: '100%', 
            display: 'flex', 
            justifyContent:'center', 
            alignItems:'center'}}
            >
              <div style={{overflow: 'hidden', 
              fontWeight:600, 
              marginRight: '10px'
              }} 
              className="copyReferral" 
              cols="5"
              disabled>{code}</div>
            <img src={Copy} alt="copy" style={{height: '30px', width: '30px', cursor:'pointer'}}
              onClick={CopyToClipBoard}
            />
            </div>
            <p style={{fontWeight: 400, width: '100%', textAlign:'center', marginTop: '40px'}}>share with your friends to improve your rank</p>
            <div style={{width: '100%', display: 'flex', justifyContent:'space-around'}}>
            <TwitterShareButton url={shareUrl} quote={shareQuote} onClick={() => updateServerOnShareAction('TW')}>
              <TwitterIcon round/>
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} quote={shareQuote} onClick={() => updateServerOnShareAction('FB')}>
              <FacebookIcon round/>
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl} quote={shareQuote} onClick={() => updateServerOnShareAction('WA')}>
              <WhatsappIcon round/>
            </WhatsappShareButton>
            </div>
        </CardBody>
    </CardWrapper>
}

export default RankCard;