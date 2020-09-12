import React from 'react'
import App from '../components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.scss'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'gatsby-plugin-react-i18next'

export default function index() {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{t('head.title')}</title>
                <html lang={t('head.lang')} />
                <meta name="description" content={t('head.description')} />
            </Helmet>
            <App />
        </>
    )
}
