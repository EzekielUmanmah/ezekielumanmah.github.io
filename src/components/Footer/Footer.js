import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkItem href='mailto:umanmah234@gmail.com'><SiGmail />umanmah234@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Continually improving each iteration</Slogan>
        </CompanyContainer>
            <SocialContainer>
            <SocialIcons href='https://github.com/EzekielUmanmah' target='_blank'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://linkedin.com' target='_blank'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
