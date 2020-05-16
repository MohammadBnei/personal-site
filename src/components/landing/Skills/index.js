import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, SkillIconContainer, ResumeContainer } from './styles';
import skillIcons from './icons.json'

const resume = {
    "name": "cv",
    "link": "https://bnei.dev/cv.pdf",
    "icon": "/icons/cv.svg"
}


export const Skills = () => (
    <Wrapper id="about">
        <SkillsWrapper as={Container}>
            <Thumbnail>
                <img src={dev} alt="I’m Mohammad and I’m a Fullstack & Devops engineer!" />
            </Thumbnail>
            <Details>
                <h1>My Skills</h1>
                <p>
                    Primarly a javascript developper, I am versatile and love learning new technologies
                </p>
                {renderSkillIcons()}
                <ResumeContainer>
                   You can also check out my traditionnal Curriculum Vitae :  
                    <a key={resume.name} href={resume.link} rel="noopener noreferrer" target="_blank">
                        <img width="72" src={resume.icon} alt={resume} />
                    </a>
                </ResumeContainer>
                <Button as={AnchorLink} href="#contact">
                    Hire me
                </Button>
            </Details>
        </SkillsWrapper>
    </Wrapper>
);

const renderSkillIcons = () => (
    <SkillIconContainer>
        {
            skillIcons.map(e => (
                <a key={e.name} href={e.link} rel="noopener noreferrer" target="_blank">
                    <img width="72" src={e.icon} alt={e.name} />
                </a>
            ))
        }
    </SkillIconContainer>
)