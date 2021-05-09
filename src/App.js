import React from 'react';
import './App.css';
import {Schools} from './containers/Schools.js';
import { Switch, Route } from 'react-router-dom';
import { News } from './containers/News';
import { NewsItem } from './containers/NewsItem';

function App() {
  return (
    <div className="flex h-full">
        <div className="flex-1 font-sans">
          <Switch>
            <Route exact path="/" component={Schools} />
            <Route exact path="/newsitems" component={News} />
            <Route exact path="/newsitems/:id" component={NewsItem} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
