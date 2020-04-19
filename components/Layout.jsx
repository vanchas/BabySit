// import Head from 'next/head';
import Navbar from './Navbar';

// layout is the main page

const Layout = (props) => (
  <div className="layout">
    {/* <Head>
      <title>Babysit</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="../public/favicon.ico" type="image/x-icon"/>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head> */}
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;