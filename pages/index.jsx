import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/Layouts'
import Intro from '../src/components/Intro'
import Safety from '../src/components/Safety'
import Offers from '../src/components/Offers'
import Locations from '../src/components/Locations'
// import styles from '../styles/Home.module.css'

export default function Home() {  //{ data }
  // console.log('HOME', data)
    const data = { 
      logoUrl: '/images/meneds-logo-header1-1.png',
      franchise: 'franchise now!',
      menu: [
      {id: 1, item: 'menu', submenu: null},
      {id: 2, item: 'locations', submenu: null},
      {id: 3, item: 'grills', submenu: [
          {id: 'g1', item: 'coney island', submenu: null},
          {id: 'g2', item: 'victory grill', submenu: null}
        ]},
      {id: 4, item: 'on-taps', submenu: null},
      {id: 5, item: 'pizza truck', submenu: null},
      {id: 6, item: 'careers', submenu: null},
      {id: 7, item: 'franchising', submenu: null},
      {id: 8, item: 'school', submenu: null},
      {id: 9, item: 'order online', submenu: null}
    ]
  }

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

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost:3000/api/menu`)
//   const data = await res.json()

//   console.log('FETCH')

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       data,
//     }, // will be passed to the page component as props
//   }
// }
