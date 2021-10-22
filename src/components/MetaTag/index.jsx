import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTag = ({ keywords, description, title }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={`Youngrello,${keywords}`} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Youngrello" />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};

export default MetaTag;
