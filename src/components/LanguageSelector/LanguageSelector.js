import React, { useState, useEffect } from 'react'
import { useI18next, Link } from 'gatsby-plugin-react-i18next'
import Fade from 'react-reveal/Fade'

const LanguageSelector = () => {
    const { languages, originalPath } = useI18next()

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
                    <span className="d-flex mt-3 lang-btn" key={lng}>
                        <Link
                            to={originalPath}
                            language={lng}
                            className="cta-btn cta-btn--hero"
                        >
                            {lng}
                        </Link>
                    </span>
                ))}
            </div>
        </Fade>
    )
}

export default LanguageSelector