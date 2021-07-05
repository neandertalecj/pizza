const Banners = () => {
  return <>
    {/* single baner */}
    <div className="border-3 border-gold hover:border-red-500 mb-12">
      <img src="/images/baners/MEN001007_001_WebsiteLeaderboards_03.22.19_Catering.jpg" alt="" className="" />
    </div>

    {/* two baner */}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 pb-20 justify-center md:justify-between">
      <div className="col-span-2 md:col-auto">
        <img
          src="/images/baners/MEN001007_001_WebsiteLeaderboards_GL_Card.jpg" alt="banner"
          className="w-full hidden md:block border-3 border-gold hover:border-red-500"
        />
        <img
          src="/images/baners/MEN001007_001_WebsiteLeaderboards_GL_Card-300x133.jpg" alt="banner"
          className="w-full md:hidden border-3 border-gold hover:border-red-500"
        />
      </div>

      <div className="col-span-2 md:col-auto">
        <img
          src="/images/baners/MEN_WebsiteLeaderboards_PizzaTruck.png" alt="banner"
          className="w-full hidden md:block border-3 border-gold hover:border-red-500"
        />
        <img
          src="/images/baners/MEN_WebsiteLeaderboards_PizzaTruck-300x133.png" alt="banner"
          className="w-full md:hidden border-3 border-gold hover:border-red-500"
        />
      </div>
    </div>
  </>
}

export default Banners