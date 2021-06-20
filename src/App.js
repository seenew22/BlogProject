import React, { Fragment } from 'react';
import './App.css';

import { routingPageList } from './routingInfo';
import { Route, Switch } from 'react-router-dom';

import { Content } from 'Page/';

function App() {
  return (
    <div className="App">
      <Fragment>
      <Content>
        <Switch>
          {routingPageList().map((data,index) => 
            <Route 
              key={index} 
              exact={data.isExact} 
              path={data.path} 
              component={data.comp} 
            />)
          }
        </Switch>
      </Content>
      </Fragment>
    </div>
  );
}

export default App;
