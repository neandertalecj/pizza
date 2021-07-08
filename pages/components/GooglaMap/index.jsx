import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Locations from '../Locations'

// Callback for a SWR hook
async function fetchData(url) {
  const res = await fetch(url)
  return res.json()
}
// Base url for Google Map
const baseUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDSHR1zHFPffAcFIsPOfEXAoPHandE31Ic&q=Space+Needle,Seattle+WA' 

export default function GoogleMap () {
  const { data, error } = useSWR('/api/points', fetchData)
  const [places, setPlaces] = useState([]) 
  const [center, setCenter] = useState({ lat: '36.803922', lng: '-119.790896' })//A Map center
  const [url, setUrl] = useState('')
  const [errInp, setErrInp] = useState(null)

  useEffect(() => {
    setUrl(`${baseUrl}&center=${center.lat}%2C${center.lng}`)
  }, [center])

  useEffect(() => {
    if (data) {
      const res = data.reduce((acc, cur) =>  [...acc, { name:cur.store }], [])
      setPlaces(res)
    }
  }, [data])

  // The setting of a google map center depends on choosing coordinate
  const handleMapCenter = loc => {
    if (!loc) {
      setErrInp('Required Field')
      console.log('!loc')
    } else {
      const placeObj = data.find(el => {
        console.log(el.store, loc.name)
        return el.store.trim() === loc.name.trim()
      })

      setCenter({lat: placeObj.lat,lng: placeObj.lng})
      setErrInp(null)
    }
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Locations places={{places, errInp}} onMapCenter={handleMapCenter} />

      <div className="flex container mx-auto mt-5 mb-10">
        {/* Listo of addresses */}
        <div className="w-1/3 mr-8 h-96 overflow-y-scroll overflow-hidden">
          {data.map((item) => (
            <div key={item.id}>
              <h3 className="text-red-600 uppercase tracking-wider text-xl">{item.store}</h3>
              <button
                className="px-3 py-2 mt-3 mb-2 bg-gray-800 text-white uppercase hover:underline"
              >Order online</button>
              <div className="text-gray-900 font-roboto tracking-wider">{item.address}</div>
              <div className="text-gray-900 font-roboto tracking-wider">
                {item.city}, {item.state} {item.zip}
              </div>
              <div>{item.phone}</div>
              <a href="" className="uppercase font-semibold">directions</a>
              <div className="border-black border-b mt-3 mb-3"></div>
            </div>
          ))}
        </div>

        <div className="w-2/3">
          {/* Google Map */}
          <iframe
            className="w-full h-96"
            style={{border: '0'}}
            loading="lazy"
            src={url}>
          </iframe>
        </div>

      </div>
    </>
  )
}
