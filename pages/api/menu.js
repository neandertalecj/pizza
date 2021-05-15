// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

export default (req, res) => {
  res.status(200).json(
    { 
      logoUrl: '/images/meneds-logo-header1-1.png',
      franchise: 'franchise now!',
      menu: [
      {id: 1, item: 'menu', submenu: null},
      {id: 2, item: 'locations', submenu: null},
      {id: 3, item: 'grills', submenu: [
          {id: 'g1', item: 'coney island', submenu: null},
          {id: 'g2', item: 'victory grill', submenu: null}
        ]},
      {id: 4, item: 'on-taps', submenu: null},
      {id: 5, item: 'pizza truck', submenu: null},
      {id: 6, item: 'careers', submenu: null},
      {id: 7, item: 'franchising', submenu: null},
      {id: 8, item: 'school', submenu: null},
      {id: 9, item: 'order online', submenu: null}
    ]
  })
}