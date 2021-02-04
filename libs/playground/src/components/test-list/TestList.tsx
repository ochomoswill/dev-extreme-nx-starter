import React from 'react';

import styled from 'styled-components';
import { employees } from './data';
import { List } from 'devextreme-react';
import { IListOptions } from 'devextreme-react/list';

/* eslint-disable-next-line */
// export interface TestListProps {}

export type TestListProps = IListOptions;

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
        // dataSource={props.dataSource}
        height="100%"
        grouped={true}
        collapsibleGroups={true}
        groupRender={GroupTemplate}
        {...props}
      />

    </StyledTestList>
  );
}

export default TestList;
