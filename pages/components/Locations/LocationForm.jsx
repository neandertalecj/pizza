import React, { useState } from 'react'
import * as yup from 'yup'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

let schema = yup.object().shape({
  location: yup.string().required(),
  radius: yup.number().required().positive().integer(),
})

const radiuses = [{ id: 0, radius: '' },{ id: 1, radius: 10 }, { id: 2, radius: 25 }, { id: 3, radius: 50 },  { id: 4, radius: 100 }, { id: 5, radius: 150 }, { id: 6, radius: 500 }]

const LocationForm = props => {// ({ places, onMapCenter, errInp })
  const [loc, setLoc] = useState('')

  // Calbacks for Atocomplete component - ReactSearchAutocomplete
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setLoc(string)
  }
  const handleOnSelect = (item) => {
    setLoc(item)
  }
  const handleOnClear = () => {
    setLoc('')
  }
  // ---

  return (
    <>
      <div className="container flex flex-col md:flex-row md:items-baseline justify-center px-6 py-2 text-xsm font-roboto font-medium text-gray-600 uppercase">
        {/* Search */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="text-center pb-2" htmlFor="location">START LOCATION</label>
            {/* Fild with autocomlite */}
            <div 
              className="w-auto md:w-60 mx-5 md:-mt-2 focus:outline-none focus:ring-gray-500 focus:border-gray-500 border border-gray-300"
            >
              <ReactSearchAutocomplete
                styling={{borderRadius: 'none', boxShadow: 'none', border: 'none'}}
                items={props.places.places || []} //array of elements for searchin
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                onClear={handleOnClear}
                autoFocus
                type="text" 
                placeholder="Fresno, CA"
              />
            </div>
          </div>
          {/* Error */}
          <div className="text-red-600 capitalize font-thin flex py-2">
            {props.places.errInp && <span>{props.places.errInp}</span>}
          </div>
        </div>
        {/* Select */}
        <div>
          <div className="flex flex-col  md:flex-row md:items-center">
            <label className="text-center py-2" htmlFor="radius">Radius</label>
            
            <select className="focus:border-gray-500 border border-gray-300 md:mx-4" >
              {radiuses.map(({ id, radius}) => (
                <option className="p-10" key={id} value={radius}>{radius} mi</option>
              ))}
            </select>
            
          </div>
        </div>

        <button
          className="p-3 mt-5 bg-black text-white uppercase hover:underline"
          type="submit"
          onClick={()=> props.onMapCenter(loc)}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default LocationForm