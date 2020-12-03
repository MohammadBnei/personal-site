import React, { useContext, useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../Title/Title'
import AboutImg from '../Image/AboutImg'
import PortfolioContext from '../../context/context'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const About = () => {
    const { t, i18n } = useTranslation()
    const { about } = useContext(PortfolioContext)
    const { img, ...resume } = about

    const [isDesktop, setIsDesktop] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true)
            setIsMobile(false)
        } else {
            setIsMobile(true)
            setIsDesktop(false)
        }
    }, [])

    return (
        <section id="about">
            <Container>
                <Title title={t('about me')} />
                <Row className="about-wrapper">
                    <Col md={6} sm={12}>
                        <Fade bottom duration={1000} delay={600} distance="30px">
                            <div className="about-wrapper__image">
                                <Tilt
                                    options={{
                                        reverse: false,
                                        max: 8,
                                        perspective: 1000,
                                        scale: 1,
                                        speed: 300,
                                        transition: true,
                                        axis: null,
                                        reset: true,
                                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                                    }}
                                >
                                    <div data-tilt className="thumbnail rounded">
                                        <AboutImg alt="profile picture" filename={img} />
                                    </div>
                                </Tilt>
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                            <div className="about-wrapper__info">
                                <p className="about-wrapper__info-text">
                                    {t('about.paragraphOne')}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {t('about.paragraphTwo')}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {t('about.paragraphThree')}
                                </p>
                                {resume && (
                                    <span className="d-flex mt-3">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cta-btn cta-btn--resume"
                                            download
                                            href={i18n.language === 'fr' ? resume.resumefr : resume.resumeen || resume.resumeen}
                                        >
                                            {t('about.downloadBtn')}
                                        </a>
                                    </span>
                                )}
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
