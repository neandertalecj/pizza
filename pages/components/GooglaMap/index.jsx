import { useEffect, useState } from 'react'
import useSWR from 'swr'

async function fetchData(url) {
  // console.log('fetchData', url)

  const res = await fetch(url)
  return res.json()
}

export default function GoogleMap () {

  const { data, error } = useSWR('/api/points', fetchData)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // console.log('Google Map', data)

  return (
    <div className="flex container mx-auto mt-5 mb-10">
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
        <iframe
          className="w-full h-96"
          // width="600"
          // height="450"
          // style="border:0"
          style={{border: '0'}}
          loading="lazy"
          // allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDSHR1zHFPffAcFIsPOfEXAoPHandE31Ic&q=Space+Needle,Seattle+WA">
        </iframe>
      </div>
    </div>
  )
}
