import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { Container } from 'react-bootstrap'
import PortfolioContext from '../../context/context'
import Title from '../Title/Title'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation()
    const { contact } = useContext(PortfolioContext)
    const { email } = contact

    return (
        <section id="contact">
            <Container>
                <Title title={t('contact.title')} />
                <Fade bottom duration={1000} delay={600} distance="30px">
                    <div className="contact-wrapper">
                        <p className="contact-wrapper__text">
                            {t('contact.cta')}
                        </p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--resume"
                            href={`mailto:${email}`}
                        >
                            {t('contact.btn')}
                        </a>
                    </div>
                </Fade>
            </Container>
        </section>
    )
}

export default Contact
