import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Having over 5.1 years of hands-on experience in diverse technologies, including Spring frameworks,
        Java 8 features, database management, web services security, logging frameworks, cloud integration
        (Azure), Kafka, ELK stack, AWS, Kubernetes, and CI/CD pipelines. Garnered extensive proficiency
        through successful project engagements, showcasing a comprehensive mastery of skills, robust
        problem-solving, and impactful contributions to deliver cutting-edge solutions.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;