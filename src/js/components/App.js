import React from 'react';

import Jumbotron from './presentational/Jumbotron';
import MainLayout from './layout/MainLayout';

const App = () => (
  <div id="mainContainer">
    <Jumbotron>
      <h1>Task Manager</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nec nunc tempus sem gravida venenatis a in enim. Nullam a dapibus
        turpis, auctor tristique leo.
      </p>
    </Jumbotron>
    <MainLayout />
  </div>
);

export default App;
