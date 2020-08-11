const path = window.location.pathname.split('/')[1];

export const MenuItem = [
  {
    icon: 'menu-icon mdi mdi-car',
    name: 'Cars',
    to: path === 'wesalecar-admin' ? '/wesalecar-admin/cars' : '/cars',
    // items: [
    //   {
    //     name: 'Products',
    //     to: '/cars'
    //   }
    // ]
  },
  // {
  //   icon: 'menu-icon mdi mdi-domain',
  //   name: 'Makes',
  //   to: path === 'wesalecar-admin' ? '/wesalecar-admin/makes' : '/makes',
  // },
  // {
  //   icon: 'menu-icon mdi mdi-cube',
  //   name: 'Models',
  //   to: path === 'wesalecar-admin' ? '/wesalecar-admin/models' : '/models',
  // },
  {
    icon: 'menu-icon mdi mdi-account-key',
    name: 'Users',
    to: path === 'wesalecar-admin' ? '/wesalecar-admin/users' : '/users',
  },
  {
    icon: 'menu-icon mdi mdi-book',
    name: 'Books',
    to: path === 'wesalecar-admin' ? '/wesalecar-admin/books' : '/books',
  }
]