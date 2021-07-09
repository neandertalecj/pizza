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
  const [dataP, setDataP] = useState([])
  const [places, setPlaces] = useState([]) // A new array from 'dataP' with 'names' and 'id' only of all places
  const [center, setCenter] = useState({ lat: '36.803922', lng: '-119.790896', id: '324' })// Map center
  const [url, setUrl] = useState('') // Google map URL
  const [errInp, setErrInp] = useState(null) // Error of the search field

  useEffect(() => { setDataP(data) }, [data])

  useEffect(() => {
    // URL for Google map fatching with the center coordinate
    setUrl(`${baseUrl}&center=${center.lat}%2C${center.lng}`)

    //Putting the choosen location to the first position at the dataP array
    if (center.id !== '324') {
      const targetPlace = data.find(el => el.id === center.id)
      const filteredPlaces = data.filter(el => el.id !== center.id)
      const newData = [targetPlace, ...filteredPlaces]
      setDataP(newData) 
    }

  }, [center])

  useEffect(() => {
    if (data) {
      const res = data.reduce((acc, cur) =>  [...acc, { name: cur.store, id: cur.id }], [])
      setPlaces(res)
    }
  }, [data])

  // The setting of a google map center depends on choosen coordinate
  const handleMapCenter = loc => {
    if (!loc) {
      setErrInp('Required Field')
    } else {
      const placeObj = data.find(el =>  el.store.trim() === loc.name.trim())

      setCenter({ lat: placeObj.lat,lng: placeObj.lng, id: placeObj.id })
      setErrInp(null)
    }
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Locations places={places} onMapCenter={handleMapCenter} errInp={errInp} />

      <div className="flex flex-col  md:flex-row container mx-auto mt-5 mb-10">
        
        {/* List of addresses */}
        <div className="md:w-1/3 md:mr-8 h-80 md:h-96 overflow-y-scroll overflow-hidden order-2 md:order-1  mt-5 md:mt-0">
          {dataP && dataP.map((item) => (
            <div key={item.id} className="text-center md:text-left">
              <h3 className="text-red-600 uppercase tracking-wider md:text-xl">{item.store}</h3>
              <button
                className="px-3 py-2 mt-3 mb-2 bg-gray-800 text-white uppercase hover:underline text-xs md:text-base"
              >Order online</button>
              <div className="text-gray-900 font-roboto tracking-wider text-xs md:text-base">{item.address}</div>
              <div className="text-gray-900 font-roboto tracking-wider text-xs md:text-base">
                {item.city}, {item.state} {item.zip}
              </div>
              <div>{item.phone}</div>
              <a href="" className="uppercase font-semibold  text-xs md:text-base">directions</a>
              <div className="border-black border-b mt-3 mb-3  text-xs md:text-base"></div>
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="md:w-2/3 mt-1 md:mt-0 order-1 md:order-2">
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
