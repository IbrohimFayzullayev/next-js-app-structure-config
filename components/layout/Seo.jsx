import Head from "next/head";

const Seo = ({ children, title, description, keywords }) => {
  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>

      {children}
    </Head>
  );
};

Seo.defaultProps = {
  title: "Next js app",
  description: "for all new next app",
  keywords: "next js app",
};

export default Seo;
