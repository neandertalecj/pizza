import absoluteUrl from 'next-absolute-url'

import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layouts'
import Intro from './components/Intro'
import Safety from './components/Safety'
import Offers from './components/Offers'
import GoogleMap from './components/GooglaMap'

export default function Home({ data }) {

  return (
    <div className="font-oswald">
      <Layout {...data}>
        <Intro />
        <Safety />
        <Offers />
        <GoogleMap />
      </Layout>
    </div>  
  )
}

export async function getServerSideProps({ req }) {  //context
  const { origin } = absoluteUrl(req, "localhost:3000");
  const resp = await fetch(`${origin}/api/menu`);
  const data = await resp.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}
