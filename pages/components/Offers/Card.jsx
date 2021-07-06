const Card = ({ item }) => {
  const { promote, url2, url1, now } = item || {}
  
  return (
    <div className="relative group  cursor-pointer">
      <div className="border-3 border-red-500 absolute top-0 bottom-0 left-0 right-0 group-hover:border-white transition duration-500 ease-in-out"></div>
      <div className="">
        {/* <img className="md:hidden w-full" src={`/images/Cards/${url1}`} alt="card" /> */}
        <img className="w-full" src={`/images/Cards/${url2}`} alt="card" />
       
        {/* Promote */}
        {promote && <div className="absolute bottom-0 h-1/3 right-0 left-0 bg-red-500 text-white  text-center uppercase text-xsm leading-4 hidden group-hover:flex">
            <div className="max-w-sm m-auto">
              {promote}
            </div>
        </div>}
        
        {/* Order now */}
        {now && <div 
            className="absolute top-0 right-0 bg-red-500 text-center text-white text-base pb-2 pt-2 uppercase group-hover:bg-white group-hover:text-red-500 cursor-pointer transition duration-500 ease-in-out"
            style={{width: '97px'}}  
          >
            <a href="" className="hover:text-red-900">{now}</a>

            {/* tringle */}
            <div className="absolute top-0 right-20 w-4 transform -translate-x-4  overflow-hidden inline-block">
              <div style={{transform: 'rotate(-21deg)'}} className=" h-11  bg-red-500 transform origin-top-left group-hover:bg-white transition duration-500 ease-in-out"></div>
            </div>
          </div>
        }
      </div>
      
    </div>   
  )
}

export default Card