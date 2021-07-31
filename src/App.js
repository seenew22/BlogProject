
import React from 'react';
import {Fragment} from 'react';

import './App.css';
import {routingPageList} from './routingInfo'
import { Route, Switch } from 'react-router-dom';

import { GNB, Content } from 'Page';

const App = () => {

  return (
    <div className="App">
      <Fragment>
          <GNB/>
          <Content>
            <Switch>
              {routingPageList().map((data,index) => <Route key={index} exact={data.isExact} path={data.path} component={data.comp} />)}
            </Switch>
          </Content>
      </Fragment>
    </div>
  );
};

export default App;
