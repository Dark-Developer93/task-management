import React from 'react';
import { HashRouter } from 'react-router-dom';

import NavBar from '../presentational/NavBar';
import MainRoutes from './MainRoutes';

const MainLayout = () => (
  <HashRouter hashType="noslash">
    <div className="container">
      <NavBar />
      <main>
        <div className="card">
          <div className="card-body">
            <MainRoutes />
          </div>
        </div>
      </main>
    </div>
  </HashRouter>
);

export default MainLayout;
