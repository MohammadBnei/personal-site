import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
    title: 'Banaei - Web Developper', // e.g: 'Name | Developer'
    lang: 'en', // e.g: en, es, fr, jp
    description: 'Showcasing my website, presenting my experiences and previous projects', // e.g: Welcome to my website
}

// HERO DATA
export const heroData = {
    title: '',
    name: 'Mohammad-Amine BANAEI',
    subtitle: 'Welcome to my portfolio',
    cta: '',
}

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: 'I am a 25 years old computer science student specializing in web development.',
    paragraphTwo: 'With 2 years of professional experience as a developper in different companies, ',
    paragraphThree: '',
    resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
}

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: 'personnal-site.jpg',
        title: 'This site',
        info: 'This site uses React and Gatsby. With SSR (Server Side Rendering), SEO optimization and PWA support.',
        info2: '',
        url: '',
        repo: 'https://github.com/MohammadBnei/personal-site',
    },
    {
        id: nanoid(),
        img: 'project.jpg',
        title: 'Payment API',
        info: '',
        info2: '',
        url: '',
        repo: 'https://gitlab.com/rverdeyme/projet-react-paiement',
    },
]

// CONTACT DATA
export const contactData = {
    cta: '',
    btn: 'Email me!',
    email: 'mohammadamine.banaei@gmail.com',
}

// FOOTER DATA
export const footerData = {
    networks: [
        // {
        //     id: nanoid(),
        //     name: 'twitter',
        //     url: '',
        // },
        {
            id: nanoid(),
            name: 'linkedin',
            url: 'https://linkedin.com/in/mohammadbanaei95',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/MohammadBnei',
        },
    ],
}

// Github start/fork buttons
export const githubButtons = {
    isEnabled: false, // set to false to disable the GitHub stars/fork buttons
}
