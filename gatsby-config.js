module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
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
      
                // you can pass any i18next options
                // pass following options to allow message content as a key
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    },
                    keySeparator: false,
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
                background_color: '#fff',
                theme_color: '#7CE07E',
                display: 'standalone',
                icon: 'src/images/favicon.png',
                cache_busting_mode: 'none'
            },
        },
        'gatsby-plugin-offline',
    ],
}
