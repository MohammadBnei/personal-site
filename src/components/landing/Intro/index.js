import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
    <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
            <Details>
                <h1>Hi There!</h1>
                <h4>I’m Mohammad and I’m a Fullstack & Devops engineer!</h4>
                <p>
                In a world with constant evolution, we have to keep up. The means to access information, share with others and perform business tasks has reached a turning point. In this day and age, if you want to reach a large audience and be able to adapt, you need to use the world wide web to your advantage. Discover how I can help...
                </p>
            </Details>
            <Thumbnail>
                <img src={dev} alt="I’m Mohammad and I’m a Fullstack & Devops engineer!" />
            </Thumbnail>
        </IntroWrapper>
    </Wrapper>
);
