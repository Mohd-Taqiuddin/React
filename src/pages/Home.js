import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return(
    <div className='home'>
      <div className='home__header'>
        <Link to="/about">Gmail</Link>
        <Link to="/about">Images</Link>
        <AppsIcon />
        <Avatar />
      </div>


      <div className='home__body'>
        <img src='https://res.cloudinary.com/demo/image/fetch/fl_png8/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='google logo'/>
        <div className='home__input'>
          <Search />
        </div>
      </div>


      <div className='home__footer'>
        <div className='home__footerLeft'>
          <Link to={{ pathname: "https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1" }}>About</Link>
          <Link to="/about">Advertising</Link>
          <Link to="/about">Business</Link>
          <Link to="/about">How Searh works</Link>
        </div>

        <div className='home__footerRight'>
          <Link to="/about">Privacy</Link>
          <Link to="/about">Terms</Link>
          <Link to="/about">Settings</Link>
        </div>

      </div>


    </div>
  ) 
}

export default Home;
