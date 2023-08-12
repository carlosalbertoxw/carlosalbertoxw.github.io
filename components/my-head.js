import Head from 'next/head'

const MyHead = ({title}) => (
  <Head>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
    <title>{title}</title>
		<meta name="description" content={title} />
    <meta property="og:description" content={title} />
		<link href='/favicon.ico' rel='icon' type='image/x-icon'/>
    <meta property="og:image" content="/favicon.ico" />
  </Head>
);

export default MyHead;