module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-netlify',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-i18next',
            options: {
                path: `${__dirname}/src/locales`,
                languages: ['en', 'fr'],
                defaultLanguage: 'en',
                siteUrl: 'bnei.dev',

                // you can pass any i18next options
                // pass following options to allow message content as a key
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    },
                    nsSeparator: false
                },
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Mohammad BANAEI\'s portfolio',
                short_name: 'Mohammad\'s portfolio',
                start_url: '/',
                description: 'Showcasing my website, presenting my experiences and previous projects',
                background_color: '#fff',
                theme_color: '#7CE07E',
                display: 'fullscreen',
                icon: 'src/images/favicon.png',
                localize: [{
                    start_url: '/fr/',
                    lang: 'fr',
                    name: 'Mohammad BANAEI - Portfolio',
                    short_name: 'Mohammad - Portfolio',
                    description: 'Ce site présente mes capacités ainsi que mes experiences passées.'
                }]
            },
        },
        'gatsby-plugin-offline',
    ],
}
