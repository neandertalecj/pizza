import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layouts'
import Intro from './components/Intro'
import Safety from './components/Safety'
import Offers from './components/Offers'
import Locations from './components/Locations'
import GoogleMap from './components/GooglaMap'
// import styles from '../styles/Home.module.css'

export default function Home({ data }) {

  return (
    <div className="font-oswald">
      <Layout {...data}>
        <Intro />
        <Safety />
        <Offers />
        <Locations />
        <GoogleMap />
      </Layout>
    </div>  
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/menu`)
  const data = await res.json()

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
