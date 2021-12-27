import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout';
import { WEBSITE_HOST_URL } from '../utils/constants';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Метод улитки: Медленный путь к финансовой свободе',
    description:
      'Книга о том, как формировать и преумножать финансовый капитал.',
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      {/*<meta property="og:type" content={meta.type} />*/}
      {/*<meta property="og:site_name" content="" />*/}
      {/*<meta property="og:description" content={meta.description} />*/}
      {/*<meta property="og:title" content={meta.title} />*/}
      {/*<meta property="og:image" content={meta.image} />*/}
      {/*<meta name="twitter:card" content="" />*/}
      {/*<meta name="twitter:site" content="" />*/}
      {/*<meta name="twitter:title" content={meta.title} />*/}
      {/*<meta name="twitter:description" content={meta.description} />*/}
      {/*<meta name="twitter:image" content={meta.image} />*/}
    </NextHead>
  );
};

export default Head;
