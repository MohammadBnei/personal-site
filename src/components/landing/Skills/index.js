import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, SkillLinks } from './styles';
import skillIcons from './icons.json'

export const Skills = () => (
    <Wrapper id="about">
        <SkillsWrapper as={Container}>
            <Thumbnail>
                <img src={dev} alt="I’m Mohammad and I’m a Fullstack & Devops engineer!" />
            </Thumbnail>
            <Details>
                <h1>My Skills</h1>
                {
                    skillIcons.map(e => (
                        <SkillLinks href={e.link} rel="noopener noreferrer" target="_blank">
                            <img width="72" src={e.icon} alt={name} />
                        </SkillLinks>
                    )
                    )}
                <Button as={AnchorLink} href="#contact">
                    Hire me
                </Button>
            </Details>
        </SkillsWrapper>
    </Wrapper>
);
