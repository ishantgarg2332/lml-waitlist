import Contact from 'components/Contact'
import React from 'react'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'
import { Box, SmallDevicesHidden } from 'styles/Global'
import Tooltip from 'react-tooltip';
import Info from '../../../assets/images/info.png'

const SectionWrapper = styled.section`
  background: hsl(343, 57%, 93%);
`

const ContentWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  @media ${device.lg} {
    padding-top: 20px;
  }
  @media ${device.sm} {
    /* max-width: 200px; */
  }
`

const  WelcomeMessage = styled.h1`
  position: relative;
  font-size: 72px;
  font-weight: 900;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 14vh;

  @media ${device.md} {
    font-size: 60px;
  }
  @media ${device.sm} {
    margin-top: 60px;
    margin-top: 40px;
    text-align: center;
  }
`

const LogoWrapper = styled.div`
  width: 200px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.primaryTextColor};
    path {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
  ${SmallDevicesHidden}
`

const tooltipMessage = `
  Join our waitlist for our exciting products. 
  By joining our waitlist, we will prioritize you to get our brand new EV.
  Isn't that great!!!
`;

function WelcomeSection({ message }) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <LogoWrapper>
        <img src='https://images.squarespace-cdn.com/content/v1/631f031f841f9516b44d8878/a0bd2fa8-b606-4f5c-ac05-d2670b879e6d/LML-Logo-1.png?format=1500w' alt="lml"/>
        </LogoWrapper>
        <div style={{
          display: 'flex'
        }}>
          <WelcomeMessage>
            <>
            {message}
            </>
            <img src={Info} alt="info" style={{
              height: '40px', 
              width: '40px',
              position: 'absolute',
              right: 70,
              bottom: 25
            }} data-tip={tooltipMessage}/>
          </WelcomeMessage>
        </div>
        <Tooltip />
        <Box mt={50}>
          <Contact />
        </Box>
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default WelcomeSection
