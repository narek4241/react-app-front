import React from 'react';
import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
// import { Route } from 'react-router';
// import { Route, Switch } from 'react-router';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Route } from "react-router";
// import {Router} from "react-router-dom";
// import { Route, Switch } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

export const data = [
  {
    id: '1',
    img: 'https://officialpsds.com/imageview/rq/83/rq8325_large.png?1521316532',
    price: '25000$',
    title: 'Mercedes-Benz S-class 2012',

    cat: 'transport',
    telNumber: '+37411001100',
    desc: 'The Mercedes-Benz E-Class 2015 is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations.',
    avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
    userName: 'David',
    date: '02.02.2020',
    userId: '1',
  },
  {
    id: '2',
    img: 'https://c53c522a158693d8a14f-2f385518fa4c1631c607afb3c9412012.ssl.cf1.rackcdn.com/WDDHF5GB2AA069909/bbdd2ac4be6da4d1ed9138b5657b042b.jpg',
    price: '20000$',
    title: 'Mercedes-Benz E-class 2010',

    cat: 'transport',
    desc: 'The Mercedes-Benz E-Class 2010 is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations.',
    avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
    userName: 'David',
    date: '03.04.2019',
    userId: '1',
  },
  {
    id: '3',
    img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q4/671591/2018-mercedes-benz-e-class-coupe-revealed-news-car-and-driver-photo-673666-s-original.jpg',
    title: 'Mercedes-Benz E-class 2018',
    price: '40000$',

    cat: 'transport',
    telNumber: '+37411001100',
    desc: 'The Mercedes-Benz E-Class is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations.',
    avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
    userName: 'Arman',
    date: '05.06.2020',
    userId: '2',
  },
  {
    id: '4',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825196932',
    title: 'Apple MacbookPro 16inch ',
    price: '2000$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'The Mac Pro is a series of workstations and servers for professionals designed, manufactured and sold by Apple Inc. since 2006. The Mac Pro, in most configurations and in terms of speed and performance, is the most powerful computer that Apple offers. It is one of four desktop computers in the current Macintosh lineup, sitting above the consumer range Mac Mini and iMac, and alongside the all-in-one iMac Pro.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '07.06.2020',
    userId: '3',
  },
  {
    id: '5',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81yuvhTTlkL._AC_SX466_.jpg',
    title: 'HyperX Ram 16gb DDR4',
    price: '500$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'Released to the market in 2014,[1][2][3] it is a variant of dynamic random-access memory (DRAM), of which some have been in use since the early 1970s,[4] and a higher-speed successor to the DDR2 and DDR3 technologies.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '07.06.2020',
    userId: '3',
  },
  {
    id: '6',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61eetqWp39L._AC_SX466_.jpg',
    title: 'HyperX2 Ram 16gb DDR4',
    price: '450$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'Released to the market in 2014,[1][2][3] it is a variant of dynamic random-access memory (DRAM), of which some have been in use since the early 1970s,[4] and a higher-speed successor to the DDR2 and DDR3 technologies.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '08.06.2020',
    userId: '3',
  },
  {
    id: '7',
    img: 'https://comelite-arch.com/wp-content/uploads/2018/05/Ultra-Modern-Flat-Design-1.jpg',
    title: 'Apartment Ellison',
    price: '120000$',

    cat: 'realestate',
    telNumber: '+37411001100',
    desc: 'Վաճառվում է 3 սենյականոց բնակարան Հիլլս պողոտայում: Բնակարանը կապիտալ վերանորոգված է:',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'RealEstateGroup',
    date: '08.03.2020',
    userId: '4',
  },
  {
    id: '8',
    img: 'https://weleaseocala.com/wp-content/uploads/2016/11/houses-for-rent-in-ocala-florida.jpg',
    title: 'Detached House Ellison',
    price: '300000$',

    cat: 'realestate',
    telNumber: '+37411001100',
    desc: 'Վաճառվում է 8 սենյականոց առանձնատուն Հիլլս պողոտայում: Բնակարանը կապիտալ վերանորոգված է:',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'RealEstateGroup',
    date: '10.03.2020',
    userId: '4',
  },
  {
    id: '9',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61eetqWp39L._AC_SX466_.jpg',
    title: 'HyperX2 Ram 16gb DDR4',
    price: '350$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'Released to the market in 2014,[1][2][3] it is a variant of dynamic random-access memory (DRAM), of which some have been in use since the early 1970s,[4] and a higher-speed successor to the DDR2 and DDR3 technologies.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '08.06.2020',
    userId: '3',
  },
  {
    id: '10',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825196932',
    title: 'Apple MacbookPro 16inch ',
    price: '1500$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'The Mac Pro is a series of workstations and servers for professionals designed, manufactured and sold by Apple Inc. since 2006. The Mac Pro, in most configurations and in terms of speed and performance, is the most powerful computer that Apple offers. It is one of four desktop computers in the current Macintosh lineup, sitting above the consumer range Mac Mini and iMac, and alongside the all-in-one iMac Pro.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '07.06.2020',
    userId: '3',
  },
  {
    id: '11',
    img: 'https://officialpsds.com/imageview/rq/83/rq8325_large.png?1521316532',
    price: '25000$',
    title: 'Mercedes-Benz S-class 2012',

    cat: 'transport',
    telNumber: '+37411001100',
    desc: 'The Mercedes-Benz E-Class 2015 is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations.',
    avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
    userName: 'David',
    date: '02.02.2020',
    userId: '1',
  },
  {
    id: '12',
    img: 'https://c53c522a158693d8a14f-2f385518fa4c1631c607afb3c9412012.ssl.cf1.rackcdn.com/WDDHF5GB2AA069909/bbdd2ac4be6da4d1ed9138b5657b042b.jpg',
    price: '20000$',
    title: 'Mercedes-Benz E-class 2010',

    cat: 'transport',
    desc: 'The Mercedes-Benz E-Class 2010 is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations.',
    avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
    userName: 'David',
    date: '03.04.2019',
    userId: '1',
  },
  {
    id: '13',
    img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q4/671591/2018-mercedes-benz-e-class-coupe-revealed-news-car-and-driver-photo-673666-s-original.jpg',
    title: 'Mercedes-Benz E-class 2018',
    price: '40000$',

    cat: 'transport',
    telNumber: '+37411001100',
    desc: 'The Mercedes-Benz E-Class is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations.',
    avatar: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
    userName: 'Arman',
    date: '05.06.2020',
    userId: '2',
  },
  {
    id: '14',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825196932',
    title: 'Apple MacbookPro 16inch ',
    price: '2000$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'The Mac Pro is a series of workstations and servers for professionals designed, manufactured and sold by Apple Inc. since 2006. The Mac Pro, in most configurations and in terms of speed and performance, is the most powerful computer that Apple offers. It is one of four desktop computers in the current Macintosh lineup, sitting above the consumer range Mac Mini and iMac, and alongside the all-in-one iMac Pro.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '07.06.2020',
    userId: '3',
  },
  {
    id: '15',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81yuvhTTlkL._AC_SX466_.jpg',
    title: 'HyperX Ram 16gb DDR4',
    price: '500$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'Released to the market in 2014,[1][2][3] it is a variant of dynamic random-access memory (DRAM), of which some have been in use since the early 1970s,[4] and a higher-speed successor to the DDR2 and DDR3 technologies.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '07.06.2020',
    userId: '3',
  },
  {
    id: '16',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61eetqWp39L._AC_SX466_.jpg',
    title: 'HyperX2 Ram 16gb DDR4',
    price: '450$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'Released to the market in 2014,[1][2][3] it is a variant of dynamic random-access memory (DRAM), of which some have been in use since the early 1970s,[4] and a higher-speed successor to the DDR2 and DDR3 technologies.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '08.06.2020',
    userId: '3',
  },
  {
    id: '17',
    img: 'https://comelite-arch.com/wp-content/uploads/2018/05/Ultra-Modern-Flat-Design-1.jpg',
    title: 'Apartment Ellison',
    price: '120000$',

    cat: 'realestate',
    telNumber: '+37411001100',
    desc: 'Վաճառվում է 3 սենյականոց բնակարան Հիլլս պողոտայում: Բնակարանը կապիտալ վերանորոգված է:',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'RealEstateGroup',
    date: '08.03.2020',
    userId: '4',
  },
  {
    id: '18',
    img: 'https://weleaseocala.com/wp-content/uploads/2016/11/houses-for-rent-in-ocala-florida.jpg',
    title: 'Detached House Ellison',
    price: '300000$',

    cat: 'realestate',
    telNumber: '+37411001100',
    desc: 'Վաճառվում է 8 սենյականոց առանձնատուն Հիլլս պողոտայում: Բնակարանը կապիտալ վերանորոգված է:',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'RealEstateGroup',
    date: '10.03.2020',
    userId: '4',
  },
  {
    id: '19',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61eetqWp39L._AC_SX466_.jpg',
    title: 'HyperX2 Ram 16gb DDR4',
    price: '350$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'Released to the market in 2014,[1][2][3] it is a variant of dynamic random-access memory (DRAM), of which some have been in use since the early 1970s,[4] and a higher-speed successor to the DDR2 and DDR3 technologies.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '08.06.2020',
    userId: '3',
  },
  {
    id: '20',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825196932',
    title: 'Apple MacbookPro 16inch ',
    price: '1500$',

    cat: 'electronics',
    telNumber: '+37411001100',
    desc: 'The Mac Pro is a series of workstations and servers for professionals designed, manufactured and sold by Apple Inc. since 2006. The Mac Pro, in most configurations and in terms of speed and performance, is the most powerful computer that Apple offers. It is one of four desktop computers in the current Macintosh lineup, sitting above the consumer range Mac Mini and iMac, and alongside the all-in-one iMac Pro.',
    avatar: 'https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png',
    userName: 'John',
    date: '07.06.2020',
    userId: '3',
  },
];

let poghos = 'red';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' render={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;