import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Prices from '../components/prices';

export default function Home (props) {
  return (
    <Layout>
      <div>
        <h1>Home page</h1>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  }
}
