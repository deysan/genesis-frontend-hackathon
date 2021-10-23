import React, { useEffect } from 'react';
import { Badge } from 'react-bootstrap'

import css from './Home.module.scss';

import Header from '../Header/Header';
import { getGamesList } from '../../services/Games.service';

const Home = () => {
  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <div className={css.container}>
      <Header />
      <p>Home page</p>
      <Badge bg="secondary">New</Badge>
    </div>
  );
}
 
export default Home;
