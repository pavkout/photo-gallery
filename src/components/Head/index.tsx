import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      <title>Pavlos Koutoglou | TheLook</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <meta name="description" content="Photo Gallery" />
      <meta name="og:title" content="Pavlos Koutoglou" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;
