import React from 'react';

import Jumbotron from './Jumbotron';
import MainLayout from './MainLayout';

const App = () => (
  <div id="mainContainer">
    <Jumbotron>
      <h1>Task Manager</h1>
      <p>
        Hassle free task management that allows all types of task to be created and monitor. Create and complete task 
        with a single click of a button and monitor the upcoming and overdue task in our awesome chart view!
      </p>
    </Jumbotron>
    <MainLayout />
  </div>
);

export default App;
