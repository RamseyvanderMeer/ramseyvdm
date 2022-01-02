import './App.scss';
import React, { useContext } from 'react'
import Navbar from './components/homepages/Navbar'
import About from './components/homepages/About'
import PastEvents from './components/homepages/PastEvents'
import UpcomingEvents from './components/homepages/UpcomingEvents'
import Board from './components/homepages/subpages/Board'
import Contact from './components/homepages/Contact'
import Login from './components/homepages/Login'
import Register from './components/homepages/Register'
import Footer from './components/homepages/Footer'
import Landing from './components/homepages/Landing';

import SignUp from './components/homepages/subpages/SignUp'
import Calendar from './components/homepages/subpages/Calendar'

import Admin from './components/adminComponents/Admin'

import EditAbout from './components/editComponents/EditAbout'
import EditSocial from './components/editComponents/EditSocial'
import EditEvents from './components/editComponents/EditEvents'
import EditBoard from './components/editComponents/EditBoard'

import { Route } from 'react-router-dom'
import { Element } from 'react-scroll'
import { DataContext } from './components/Context/GlobalContext'
import FadeIn from './FadeIn';

function App() {

  const state = useContext(DataContext)
  const [isLogin, setIsLogin] = state.isLogin


  return (
    <div className="App">
      <Navbar />
      <Element className='Landing'>
        <Route exact path='/' component={Landing} />
      </Element>
      <Element className='About'>
        <Route exact path='/' component={About} />
      </Element>
      <FadeIn direction={'left'}>
        <Element className='UpcomingEvents'>
          <Route exact path='/' component={UpcomingEvents} />
        </Element>
      </FadeIn>
      <FadeIn direction={'right'}>
        <Element className='PastEvents'>
          <Route exact path='/' component={PastEvents} />
        </Element>
      </FadeIn>
      <FadeIn direction={'left'}>
        <Element className='Contact'>
          <Route exact path='/' component={Contact} />
        </Element>
      </FadeIn>

      <Route exact path='/login' render={() => isLogin ? <Admin /> : <Login setIsLogin={setIsLogin} />} />
      <Route exact path='/register' render={() => isLogin ? <Register /> : <Login />} />
      {/* <Route exact path='/admin' {...console.log(isLogin)} render={() => isLogin ? <Admin /> : <Login />} /> */}
      <Route exact path='/admin' render={() => isLogin ? <Admin /> : <Login />} />
      <Route exact path='/editSocial/:id' component={EditSocial} />
      <Route exact path='/editEvent/:id' component={EditEvents} />
      <Route exact path='/editBoard/:id' component={EditBoard} />
      <Route exact path='/editAbout/:id' component={EditAbout} />
      <Route exact path='/join' component={SignUp} />
      <Route exact path='/board' component={Board} />
      <Route exact path='/calendar' component={Calendar} />
      <Route exact path='/about' component={About} />


      <Route component={Footer} />
    </div>
  );
}

export default App;
