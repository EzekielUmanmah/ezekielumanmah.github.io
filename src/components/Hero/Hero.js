import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my Personal Portfolio
      </SectionTitle>
      <SectionText>
        A motivated self-starter seeking to launch a career in Web Development. I am a self-taught developer with an eye towards attention to detail and a can-do attitude.
      </SectionText>
      <a href='mailto:umanmah234@gmail.com'><Button>Get in touch!</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;