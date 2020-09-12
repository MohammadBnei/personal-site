import React, { useState, useEffect } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Fade from 'react-reveal/Fade'

const LanguageSelector = () => {
    const { languages, changeLanguage } = useI18next()

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
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="language-selector">
                {languages.map(lng => (
                    <span className="d-flex mt-3" key={lng}>
                        <a
                            href="#"
                            className="cta-btn cta-btn--hero"
                            onClick={e => {
                                e.preventDefault()
                                changeLanguage(lng)
                            }}
                        >
                            {lng}
                        </a>
                    </span>
                ))}
            </div>
        </Fade>
    )
}

export default LanguageSelector