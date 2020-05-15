/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
    <Wrapper desktop={desktop}>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#contact">Contact</AnchorLink>
        <Link to="/csvreader">Csv Reader</Link>
    </Wrapper>
);

export default NavbarLinks;
