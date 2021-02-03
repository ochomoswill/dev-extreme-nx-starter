import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';
import { employees } from './data';
import { List } from 'devextreme-react';

/* eslint-disable-next-line */
export interface TestListProps {}

const StyledTestList = styled.div`
  color: blue;
`;

function GroupTemplate(item) {
  return <div>Assigned: {item.key}</div>;
}


export function TestList(props: TestListProps) {
  return (
    <StyledTestList>
      <h1>Welcome to TestList!</h1>

      <List
        dataSource={employees}
        height="100%"
        grouped={true}
        collapsibleGroups={true}
        groupRender={GroupTemplate} />

    </StyledTestList>
  );
}

export default TestList;
