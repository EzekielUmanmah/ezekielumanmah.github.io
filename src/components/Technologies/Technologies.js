import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { AiFillDatabase } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies related to full stack web development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillDatabase size='3rem' />
        <ListContainer>
          <ListTitle>APIs and Microservices</ListTitle>
          <ListParagraph>
            Experience creating <br />
            microservices using <br />
            Express.js, NPM, Node.js, <br />
            Mongoose, and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
      <SectionDivider />
  </Section>
);

export default Technologies;
