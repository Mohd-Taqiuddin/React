import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer";
import { useNavigate } from "react-router-dom";

function Search({ hidebuttons = false }) {

    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        console.log('YOU HIT SEARCH BUTTON');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('/search')
    };

  return(
      <form className='search'>
          <div className='search__input'>
              <SearchIcon className='search__inputIcon'/>
              <input value={input} onChange={e => setInput(e.target.value)} />
              <MicIcon />
          </div>

          {!hidebuttons ? (
              <div className='search__buttons'>
              <Button type="submit" onClick={search} variant='outlined'>Google Search</Button>
              <Button variant='outlined'>I'm Feeling Lucky</Button>
          </div>
          ): (
            <div className='search__buttons'>
            <Button type="submit" className='search__buttonsHidden' onClick={search} variant='outlined'>Google Search</Button>
            <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
        </div>
          )}

      </form>
  )
}

export default Search;
