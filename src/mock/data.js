import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
    title: 'Banaei - Web Developper', // e.g: 'Name | Developer'
    lang: 'en', // e.g: en, es, fr, jp
    description: 'Showcasing my website, presenting my experiences and previous projects', // e.g: Welcome to my website
}

// HERO DATA
export const heroData = {
    title: 'Hi, my name is ',
    name: 'Mohammad-Amine BANAEI',
    subtitle: 'Welcome to my portfolio',
    cta: '',
}

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: 'I am a 25 years old computer science student specializing in web development.',
    paragraphTwo: 'With 2 years of professional experience as a developper in different companies, ',
    paragraphThree: 'Feel free to download my resume to know more about me',
    resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
}

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: 'personnal-site.jpg',
        title: 'This site',
        info: 'This site uses React and Gatsby. With SSR (Server Side Rendering), SEO optimization and PWA support.',
        info2: 'It is greatly optimized, as you can see by generating a lighthouse report.',
        url: '',
        technologies: ['React', 'Gatsby', 'Docker', 'SSR', 'SEO'],
        repo: 'https://github.com/MohammadBnei/personal-site',
    },
    {
        id: nanoid(),
        img: 'project.jpg',
        title: 'Payment API',
        info: `Using a microservices architecture, with nginx as a reverse proxy, we developped a payment API where you can register your business, generate API keys and then use it as a payment platform for your site.`,
        info2: 'This is a school project.',
        url: '',
        technologies: ['React', 'NodeJS', 'Nginx', 'Docker', 'Microservices'],
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
