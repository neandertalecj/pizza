import React, { useEffect, useRef } from 'react'

const Intro = () => {
  const videoRef = useRef();

  useEffect(() => {
      setTimeout(()=>{
          videoRef.current.play()
      },2000)
  }, []);

  return (
  <div className="relative bg-bgintroimage overflow-hidden flex items-center justify-center bg-black h-96 bg-center bg-cover">
    <video
      className="w-full absolute left-0 right-0 z-10 top-0 h-full object-cover"
      poster="/images/me-n-eds-home-1.jpg"
      ref={videoRef}
      loop
      muted
    >
      <source src="/images/MEN-Trimmed-dough.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Banner */}
    <div className="absolute z-20">
      <div className="text-center">
        <h1 className="pt-2 pb-3 mb-8 font-medium tracking-wide text-xl md:text-4xl lg:text-6xl text-white uppercase border-t-8 border-b-8 border-red-500 inline-block">
          Fresh douch made daily
        </h1>
      </div>
      <div className="text-center">
        <div className="text-sm font-bold tracking-wider rounded-full px-8 py-2 bg-white text-red-500 hover:text-black cursor-pointer uppercase hidden md:inline-block">
          Order online
        </div>
      </div>

    </div>
  </div>
  )}

export default Intro