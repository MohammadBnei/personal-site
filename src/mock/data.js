import { nanoid } from 'nanoid'
import pdfFile from '../images/MohammadBanaeiCV.pdf'


// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    resumeen: pdfFile,
    resumefr: pdfFile
}

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: 'personnal-site.jpg',
        name: 'portfolio',
        url: '',
        technologies: ['React', 'Gatsby', 'Docker', 'SSR', 'SEO'],
        repo: 'https://github.com/MohammadBnei/personal-site',
    },
    {
        id: nanoid(),
        img: 'reactPayment.jpg',
        name: 'reactPayment',
        url: '',
        technologies: ['React', 'NodeJS', 'Nginx', 'Docker', 'Microservices'],
        repo: 'https://gitlab.com/rverdeyme/projet-react-paiement',
    },
]

// CONTACT DATA
export const contactData = {
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

export const siteMetadata = {
    siteUrl: 'https://bnei.dev',
    icon: 'favicon.png'
}

// Github start/fork buttons
export const githubButtons = {
    isEnabled: false, // set to false to disable the GitHub stars/fork buttons
}
