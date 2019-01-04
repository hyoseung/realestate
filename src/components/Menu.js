import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Menu.css';

const Navigator = () => {
  return(
    <div className="Navigator">
    <div className="Navigator_position">
            <NavLink exact to="/"> 
                <Button color="blue">그래프</Button>
            </NavLink>
            <NavLink exact to="/about">    
                <Button color ="violet">검색</Button>
            </NavLink>
            <NavLink exact to="/about/foo">
                <Button color="purple">질문</Button>
            </NavLink>
            <NavLink exact to="/ViewPost">    
                <Button color="pink">로그인</Button>
            </NavLink>
        </div>
    </div>
  );
};

export default Navigator;