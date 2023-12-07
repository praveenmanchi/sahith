import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the JavaFullStack world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Java, Python, PL/SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java/J2EE Technologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            Spring, Hibernate, JPA, Spring Core, Spring ORM, Spring MVC, Spring AOP,
            Spring Boot
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database Servers</ListTitle>
          <ListParagraph>
            Experience with <br />
            Oracle 8i/9i/10g/12c, Postgres, MySQL, MongoDB, Apache Cassandra
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment &amp; Build Tools &cloud
        </ListTitle>
          <ListParagraph>
            Experience with <br />
            Maven, Apache ANT, Gradle, AWS, Lambda, Kubernetes, Docker, Gradle.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Junit4.x, DB Unit, Coverage, Power mock, TestNG, JMeter, SOAPUI
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Methodologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            Agile, Scrum, OOAD, SDLC & Iterative
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
