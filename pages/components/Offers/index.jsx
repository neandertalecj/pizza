import Banners from "./Banners"
import Card from "./Card"

const carts = [
  { id: 1, url1: 'MEN006249_001_2021_Website_Graphics_1-300x199.jpg', url2: 'MEN006249_001_2021_Website_Graphics_1.jpg', now: 'more info', promote: null },
  { id: 2, url1: 'MEN006249_001_2021_Website_Graphics_2-300x199.jpg', url2: 'MEN006249_001_2021_Website_Graphics_2.jpg', now: 'order now', promote: null},
  { id: 3, url1: 'MEN006249_001_2021_Website_Graphics_3-300x199.jpg', url2: 'MEN006249_001_2021_Website_Graphics_3.jpg', now: 'order now', promote: null},
  { id: 4, url1: 'MEN006249_001_2021_Website_Graphics_4-300x199.jpg', url2: 'MEN006249_001_2021_Website_Graphics_4.jpg', now: 'order now', promote: null},
  { id: 5, url1: 'MEN006249_001_2021_Website_Graphics_5-300x199.jpg', url2: 'MEN006249_001_2021_Website_Graphics_5.jpg', now: 'order now', promote: null},
  { id: 6, url1: 'MEN006249_001_2021_Website_Graphics_7-300x199.jpg', url2: 'MEN006249_001_2021_Website_Graphics_7.jpg', now: 'order now', promote: 'One large 3-topping pizza with your choice of garlic cheesy bites or cinnatreats'},
  { id: 7, url1: 'MEN006249_001_2021_Website_Graphics_8-300x199.jpg', url2: 'MEN006249_001_2021_Website_Graphics_8.jpg', now: 'order now', promote: '1 Medium 3-topping pizza & 2 Personal 1-Toppings'},
  { id: 8, url1: 'MEN006249_001_2021_Website_Graphics_9.jpg', url2: 'MEN006249_001_2021_Website_Graphics_9.jpg', now: 'order now', promote: ' Two medium 1-topping pizzas with your choice of garlic cheesy bites or cinnatreats'},
  { id: 9, url1: 'MEN11068_Web_Graphics-300x199.jpeg', url2: 'MEN11068_Web_Graphics.jpeg', now: 'order now', promote: 'One large 1-topping pizza, 1/2 wings, garlic cheese bread, potato wedges and a 2-liter soda'},
]

const Offers = () => {
  return (
    <div className="bg-black">
      <div className="w-11/12 sm:w-3/4 max-w-screen-lg m-auto ">
        <h2 className="text-3xl font-medium tracking-wide pt-8 pb-3 text-white uppercase text-center">
          Special offers
        </h2>
        <div className="mb-8 border-b-4 border-red-500 w-8 m-auto"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7 pb-8">
          {carts.map(item => (
            <Card key={item.id} item={item} />   
          ))}
        </div>
        
        <Banners />

      </div>
    </div>
  )
}

export default Offers