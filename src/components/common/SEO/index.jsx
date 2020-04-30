/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from 'assets/thumbnail/thumbnail.png';
import {
    url,
    defaultDescription,
    social,
    defaultTitle,
    socialLinks,
    address,
    contact,
    legalName,
    foundingDate,
    logo,
} from 'data/config';

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
    const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
		}],
		"sameAs": [
			"${socialLinks.linkedin}",
			"${socialLinks.github}"
		]
  	}`;

    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="image" content={Thumbnail} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={Thumbnail} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image:src" content={Thumbnail} />
            <script type="application/ld+json">{structuredDataOrganization}</script>
            <title>{title}</title>
            <html lang="en" dir="ltr" />
        </Helmet>
    );
};
