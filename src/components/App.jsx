import React, { useState, useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import { PortfolioProvider } from '../context/context'

import { heroData, aboutData, projectsData, skillsData, contactData, footerData } from '../mock/data'
import Skills from './Skills/Skills'

function App() {
    const [hero, setHero] = useState({})
    const [about, setAbout] = useState({})
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
    const [contact, setContact] = useState({})
    const [footer, setFooter] = useState({})

    useEffect(() => {
        setHero({ ...heroData })
        setAbout({ ...aboutData })
        setProjects([...projectsData])
        setSkills([...skillsData])
        setContact({ ...contactData })
        setFooter({ ...footerData })
    }, [])

    return (
        <PortfolioProvider value={{ hero, about, projects, skills, contact, footer }}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </PortfolioProvider>
    )
}

export default App
