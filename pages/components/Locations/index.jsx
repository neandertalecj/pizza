const { default: LocationForm } = require("./LocationForm")

const Locations = ({ places, onMapCenter }) => {

  return (
    <div className="bg-white">
      <div className="container m-auto">

        <h3 className="pt-3 pb-2 text-black uppercase text-center text-2xl font-medium tracking-wider">Locations</h3>
        <div className="border-b-2 w-6 border-red-500 m-auto"></div>
        <div className="pb-3 pt-5 text-red-500 uppercase text-center font-medium tracking-wider">
          View all locations
        </div>
     
        <div className="border border-black">
          <LocationForm places={places} onMapCenter={onMapCenter} />
        </div>

      </div>
    </div>
  )
}

export default Locations