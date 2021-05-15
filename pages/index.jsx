import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/Layouts'
import Intro from '../src/components/Intro'
import Safety from '../src/components/Safety'
import Offers from '../src/components/Offers'
import Locations from '../src/components/Locations'
// import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  console.log('HOME', data)
  return (
    <div className="font-oswald">
      <Layout {...data}>
        <Intro />
        <Safety />
        <Offers />
        <Locations />
      </Layout>
    </div>  
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/menu`)
  const data = await res.json()

  console.log('FETCH')

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

// Home.getInitialProps = async () => {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/menu`)
//   console.log('FETCH', res)
//   const data = await res.json()
//   console.log('FETCH')

//   // Pass data to the page via props
//   return {  data }
// }