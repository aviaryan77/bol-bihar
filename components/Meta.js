import Head from 'next/head';

const Meta = ({
  title = 'बोल बिहार| Bihar की ताज़ा ख़बर| ब्रेकिंग न्यूज़ In Hindi',
  keywords = 'बोल,बिहार, Bihar, ताज़ा ख़बर, ब्रेकिंग, न्यूज़, In Hindi ',
  description = 'बोल बिहार| Bihar की ताज़ा ख़बर| ब्रेकिंग न्यूज़ In Hindi',
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta property="og:title" content={`${title} `} />
      <meta
        property="og:description"
        content={`Learn more about ${description}`}
      />
      <meta property="og:url" content={`https://bol-bihar.vercel.com/blog/}`} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
