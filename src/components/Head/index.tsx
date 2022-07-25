import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      <title>Pavlos Koutoglou | TheLook</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon_f2a65c72.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32_9e0207cf.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16_9f5b9ebd.png'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <meta name='description' content='League coding challenge' />
      <meta name='og:title' content='Pavlos Koutoglou League' />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
};

export default CustomHead;
