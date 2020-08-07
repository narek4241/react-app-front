import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import AddPost from './Components/Posts/AddPost/AddPost';
import SinglePage from './Components/Posts/SinglePage/SinglePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// import AppLoader from './Components/AppLoader/AppLoader';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Search from './Components/Posts/Search/Search';
import User from './Components/Posts/User/User';


export const data = [
  {
    date: "2020-07-25T01:02:19.479Z",
    _id: "5f1b84f3bcd690379f9f1d30",
    cat: "Electronics",
    title: "Iphone XR 256gb",
    price: "700",
    currency: "usd",
    region: "Gyumri, Shirak",
    imgUrl: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595530496/post-iphoneXR_xtcyje.png",
    state: "used",
    desc: "iPhone XR, (ոճավորված է որպես Xr, «X» արտասանվում է որպես «թեն», «տաս»), Apple կորպորացիայի սմարթֆոն, որն օգտագործում է Apple A12 Bionic պրոցեսորը և iOS 12 օպերացիոն համակարգը, որոնք ներկայացվել են 2018 թվականի սեպտեմբերի 12–ին ավելի թանկարժեք iPhone XS–ի հետ միասին։",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
  {
    date: "2020-07-25T01:02:19.479Z",
    _id: "5f1b8581bcd690379f9f1d31",
    cat: "Electronics",
    title: "Mac pro 2020",
    price: "5999",
    currency: "usd",
    region: "Yerevan, Kentron",
    imgUrl: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595533470/post-macpro_il7hxu.png",
    state: "new",
    desc: "The Mac Pro is a series of workstations and servers for professionals designed, manufactured and sold by Apple Inc. since 2006. The Mac Pro, in most configurations and in terms of speed and performance, is the most powerful computer that Apple offers. It is one of four desktop computers in the current Macintosh lineup, sitting above the consumer range Mac Mini and iMac, and alongside the all-in-one iMac Pro.",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19da271461a4d8372e4cf2",
      firstname: "Vardan",
      lastname: "Khachatryan",
      email: "vardan@gmail.com",
      contact: "+37494460625",
    },
    __v: 0,
  },
  {
    date: "2020-07-25T01:02:19.479Z",
    _id: "5f1b859fbcd690379f9f1d32",
    cat: "Electronics",
    title: "Macbook Pro 13inch 2018 ",
    price: "590000",
    currency: "amd",
    region: "Gyumri, Shirak",
    imgUrl: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595534142/post-macbookpro_mx0f0e.jpg",
    state: "new",
    desc: "The MacBook Pro is a line of Macintosh portable computers introduced in January 2006, by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is sold with 13- and 16-inch screens. A 17-inch version was sold from April 2006 to June 2012.The first-generation MacBook Pro used the design of the PowerBook G4, but replaced the PowerPC G4 chips with Intel Core processors, added a webcam, and introduced the MagSafe power connector. The 15-inch model was introduced in January 2006; the 17-inch model in April. Later revisions added Core 2 Duo processors and LED-backlit displays.",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19da271461a4d8372e4cf2",
      firstname: "Vardan",
      lastname: "Khachatryan",
      email: "vardan@gmail.com",
      contact: "+37494460625",
    },
    __v: 0,
  },
  {
    date: "2020-07-23T20:06:20.313Z",
    _id: "5f1b85e2bcd690379f9f1d34",
    cat: "Vehicles",
    title: "Mercedes-Benz S550 2016 SE",
    price: "79000",
    currency: "usd",
    region: "Gyumri, Shirak",
    imgUrl: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595533487/post-mbsclass_i5w2z7.jpg",
    imgUrl2: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-bmsclass3_psiciz.jpg",
    imgUrl3: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-mbsclass4_rmqymk.jpg",
    imgUrl4: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-mbsclass2_t3yoxb.jpg",
    imgUrl5: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-mbsclass5_htwodi.jpg",
    state: "used",
    country: "Usa",
    desc: "Մերսեդես-Բենզ W222- ը Մերսեդես-Բենզի S-Դասի տարբերակներից է, որը արտադրվել է 2013 թվականից, և հանդիսանում է Մերսեդես-Բենզ W221- ի իրավահաջորդը: W222- ը նախագծվել է 2009 թվականի ընթացքում: Մեքենայի բնօրինակ նախագծային տարբերակը ստեղծվել է Կորեացի դիզայներ Իլ-հուն Յունի կողմից, որը ներշնչված է Մերսեդես-Բենզ F700 հայեցակարգային մեքենայից:[1] Արտաքին դիզայնը մշակվել է դիզայներների թիմի կողմից ՝ Ռոբերտ Լենիկի ղեկավարությամբ:[2] W222- ն ունի դիզայնի նախատիպ թեմա CLA- դասի և E- դասի մեքենաները (W213):",
    userId: {
      date: "2020-07-23T18:38:37.215Z",
      _id: "5f19d9b0f84853d741c9b5d9",
      firstname: "Karlen",
      lastname: "Suqiasyan",
      email: "karlen@gmail.com",
      contact: "+37498785792",
    },
    __v: 0,
  },
  {
    date: "2020-07-23T20:37:42.638Z",
    _id: "5f1b8639bcd690379f9f1d36",
    cat: "Real Estate",
    title: "Norakaruyc bnakaran, 2024",
    price: "160000",
    currency: "usd",
    region: "Yerevan, Arabkir",
    imgUrl: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535626/post-apartment3_zbljz8.jpg",
    imgUrl2: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535626/post-apartment_bo9rna.jpg",
    imgUrl3: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535627/post-apartment2_byjysr.jpg",
    state: "to be built (2024)",
    desc: "Corporate housing is a term in the relocation industry that implies renting a furnished apartment, condo, or home on a temporary basis to individuals, military personnel, intern groups, or corporations as an alternative to a traditional hotel or an extended hotel stay. According to Corporate Housing Providers Association (CHPA), the industry's trade organization, corporate housing revenue was $10 billion in 2019[1] and $2.47 in 2010. The corporate housing industry has been a significant growth segment of the lodging industry for the past 20 years. As of 2015, the revenue generated by the industry reached $2.93 billion in the US, after a 7% increase over 2014, with an average stay of 84 nights.[2]",
    userId: {
      date: "2020-07-23T20:25:29.475Z",
      _id: "5f19f34c6883dbf210e9db90",
      firstname: "RealEstate",
      email: "real@gmail.com",
      contact: "+374101010",
      avatar: "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595536058/user-realestate_wpxty2.jpg",
      info: "Real Estate company, Address: Yerevan, Baghramyan 20",
    },
    __v: 0,
  },
  {
    date: "2020-07-27T17:48:32.552Z",
    _id: "5f1f2b9d1f72d200174e7e78",
    title: "Iphone 11PRO",
    price: "1500",
    state: "new",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaCy0oZgRrOxiBZXAw2ZVah0pfAF8TR-0Crw&usqp=CAU",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
  {
    date: "2020-07-28T21:19:15.499Z",
    _id: "5f21f10d01097f7eed81f98c",
    cat: "Vehicles",
    region: "Գյումրի,Շիրակ",
    type: "exchange",
    state: "used",
    price: "42000",
    currency: "usd",
    title: "Mercedes Benz G-class 2009",
    desc: "Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009",
    imgUrl: "https://i.pinimg.com/474x/e1/18/11/e11811d7c7942fe86afa760f6204f6de.jpg",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37477464241",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
  {
    date: "2020-07-30T11:30:35.368Z",
    _id: "5f22b13f3c5a88158d033cae",
    cat: "Vehicles",
    region: "Երևան,Կենտրոն",
    type: "exchange",
    state: "used",
    price: "1000000",
    currency: "usd",
    title: "Rolls Royce Phantom ",
    desc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90378219-highres-1575322323.jpg?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90378219-highres-1575322323.jpg?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90378219-highres-1575322323.jpg?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90378219-highres-1575322323.jpg?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*",
    imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90378219-highres-1575322323.jpg?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37477000000",
    userId: {
      date: "2020-07-30T11:30:35.412Z",
      _id: "5f22b0e93c5a88158d033cad",
      firstname: "User",
      lastname: "Useryan",
      email: "user@gmail.com",
    },
    __v: 0,
  },
]


class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
    postsData: []
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 200
    );
  }

  render() {
    return (
      <div className="App">
        {
          this.setState ? <Loader className='app-loader' style={{ display: 'block' }} type="Bars" color="#000" timeout={500} /> : <Loader className='app-loader' style={{ display: 'block' }} type="Bars" color="#fff" timeout={'2000'} />
        }

        <div className="app-content">
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              {/* <AppLoader /> */}
              <Route path='/posts/add' component={AddPost} />

              <Route path='/auth/profile' component={Profile} />
              
              <Route path='/posts/post/:postId' component={SinglePage} />

              <Route path='/posts/search' render={() => {return <Search />}} />

              <Route path='/posts/user/:userId' component={User} />

              <Route path='*' exact render={() => {return(<NotFound message='The Requested URL was Not Found on This Server'></NotFound>)}} />
              
            </Switch>
          </BrowserRouter>
        </div>

      </div>
    )
  }
}

export default App;




