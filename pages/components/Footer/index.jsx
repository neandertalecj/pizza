const { default: FooterForm } = require("./FooterForm")

const Footer = () => {
  return <>
    <footer className="bg-black pt-12">
      <div className="border-b-2 border-gold w-10/12 m-auto"></div>

      <div className="container lg:px-40 m-auto p-8 flex flex-col md:flex-row justify-center md:justify-between">

        <div className="pb-4 md:pb-0 leading-6 flex text-center md:text-left flex-col text-gold uppercase">
          <a className="hover:underline" href="">Catering</a>
          <a className="hover:underline" href="">Contact</a>
          <a className="hover:underline" href="">Nutritional value</a>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="flex justify-center pb-6 md:pb-0">
            <a href="https://www.facebook.com/neandertalecj"><img className="w-7 mr-2" src="/images/icons/fb.png" alt="" /></a>
            <a href="https://www.instagram.com/neandertalecj/"><img className="w-7 mr-2" src="/images/icons/ig.png" alt="" /></a>
            <a href=""><img className="w-7 mr-2" src="/images/icons/tw.png" alt="" /></a>
          </div>
          <div className="">
            <FooterForm />
          </div>
        </div>
      </div>

      <div className=" bg-black tracking-widest text-center text-white uppercase text-xsm pb-2">
       ©2021 | <a className="hover:underline" href="">ME-N-EDS</a> 
       | <a className="hover:underline" href="">DESIGNED AND DEVELOPED BY JSA</a>
       | <a className="hover:underline" href="">PRIVACY POLICY</a>
      </div>

    </footer>
    
  </>
}

export default Footer