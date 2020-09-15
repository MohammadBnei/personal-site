import React from 'react'
import App from '../components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.scss'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'gatsby-plugin-react-i18next'
import { siteMetadata } from '../mock/data'

export default function index() {
    const { t } = useTranslation()
    const { siteUrl, icon } = siteMetadata

    return (
        <>
            <Helmet defer={false} defaultTitle="Banaei - Web Developper" >
                <meta charSet="utf-8" />
                <html lang={t('head.lang')} />
                <link rel="canonical" href={siteUrl} />
                <meta name="docsearch:version" content="2.0" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={t('head.lang')} />
                <meta property="og:site_name" content={t('head.title')} />
                <title>{t('head.title')}</title>
                <meta property="og:image" content={`${siteUrl}${icon}`} />
                <meta property="og:image:alt" content="Bnei.dev logo" />
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />

                <meta name="twitter:card" content="summary" />
                <meta name="title" content={t('head.title')} />
                <meta name="description" content={t('head.description')} />
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://www.bnei.dev",
                        "name": "Mohammad Banaei"
                        }
                    `}
                </script>
            </Helmet>
            <App />
        </>
    )
}

// <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://metatags.io/">
// <meta property="og:title" content="Hi, my name is Mohammad-Amine BANAEIWelcome to my portfolio">
// <meta property="og:description" content="Showcasing my website, presenting my experiences and previous projects">
// <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://metatags.io/">
// <meta property="twitter:title" content="Hi, my name is Mohammad-Amine BANAEIWelcome to my portfolio">
// <meta property="twitter:description" content="Showcasing my website, presenting my experiences and previous projects">
// <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
