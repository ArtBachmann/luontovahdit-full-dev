// https://tylermcginnis.com/react-router-programmatically-navigate/

import React from 'react'

import MainMap from '../map/MainMap'
import NavBar from '../nav/NavBar/NavBar'
import Footer from './Footer'
//import '../../index.css';
const HomePage = ({ history }) => {
  return (
    <div>
      <br />
      <NavBar />
      <br />
      <div className="ui inverted grey center aligned segment">
        <div className="ui text container">

          <h2>Luontovahtit demo 0.1</h2>
          {/* <div onClick={() => history.push('/activities')} className="ui big white inverted button">
            Havainnot
                <i className="right arrow icon" />
          </div> */}

          <br />
          <MainMap />
        </div>
        <br />
        <h3>Copyright &copy; {new Date().getFullYear()} Luontovahtit</h3>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage