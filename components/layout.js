import Head from 'next/head';
import Navbar from './navbar';

export default (props) => (
  <div>
    <Head>
      <title>NextJs</title>
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <Navbar />
    {props.children}
  </div>
)