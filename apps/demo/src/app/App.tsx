import React from 'react';

import styled from 'styled-components';

import { Route, Link } from 'react-router-dom';

import { TestList, Playground, TestTable } from '@dev-extreme-nx-starter/playground';
import { Box } from 'devextreme-react';
import { Item } from 'devextreme-react/box';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <h1>Dev Extreme Nx Demo</h1>


      <Box
        height={100}
        width={600}>
        <Item baseSize={200} ratio={2}>
          <div role="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/playground">Playground</Link>
              </li>
              <li>
                <Link to="/test-list">Test List</Link>
              </li>
              <li>
                <Link to="/test-table">Test Table</Link>
              </li>
            </ul>
          </div>
        </Item>
        <Item baseSize={500} ratio={6}>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            )}
          />
          <Route path="/playground" component={Playground} />
          <Route path="/test-list" component={TestList} />
          <Route path="/test-table" component={TestTable} />
        </Item>
      </Box>
      <br />


      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
