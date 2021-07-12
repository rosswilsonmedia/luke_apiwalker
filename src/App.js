import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


import Form from './components/Form';
import ApiResult from './components/ApiResult';

import { Router } from '@reach/router';

function App() {
  return (
    <div>
      <Form/>
      <Router>
        <ApiResult path="/:displayType/:displayId"/>
      </Router>
    </div>
  );
}

export default App;
