import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import PortfolioContext from '../../context/context'
import Title from '../Title/Title'
import ProjectImg from '../Image/ProjectImg'
import { useTranslation } from 'react-i18next'

const Projects = () => {
    const { t } = useTranslation()
    const { projects } = useContext(PortfolioContext)

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
        <section id="projects">
            <Container>
                <div className="project-wrapper">
                    <Title title={t('projects')} />
                    {projects.map((project) => {
                        const { url, repo, img, id, name, technologies } = project

                        return (
                            <Row key={id}>
                                <Col lg={4} sm={12}>
                                    <Fade
                                        left={isDesktop}
                                        bottom={isMobile}
                                        duration={1000}
                                        delay={500}
                                        distance="30px"
                                    >
                                        <div className="project-wrapper__text">
                                            <h3 className="project-wrapper__text-title">{t(`${name}.title`)}</h3>
                                            <div>
                                                <p>
                                                    {t(`${name}.info`)}
                                                </p>
                                                <p className="mb-4">{t(`${name}.info2`)}</p>
                                            </div>
                                            {url && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--hero"
                                                    href={url}
                                                >
                                                    {t('See Live')}
                                                </a>
                                            )}

                                            {repo && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn text-color-main"
                                                    href={repo}
                                                >
                                                    {t('Source Code')}
                                                </a>
                                            )}
                                            <div className="techno-pills">
                                                {technologies && technologies.map(tech => (
                                                    <Badge key={tech} pill variant="dark">{tech}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={8} sm={12}>
                                    <Fade
                                        right={isDesktop}
                                        bottom={isMobile}
                                        duration={1000}
                                        delay={1000}
                                        distance="30px"
                                    >
                                        <div className="project-wrapper__image">
                                            <a
                                                href={url || repo || '#!'}
                                                target="_blank"
                                                aria-label="Project Link"
                                                rel="noopener noreferrer"
                                            >
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
                                                        <ProjectImg alt={t(`${name}.title`)} filename={img} />
                                                    </div>
                                                </Tilt>
                                            </a>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default Projects
