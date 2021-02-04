import React from 'react';

import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestTableProps {}

const StyledTestTable = styled.div`
  color: pink;
`;

export function TestTable(props: TestTableProps) {
  return (
    <StyledTestTable>
      <h1>Welcome to TestTable!</h1>
    </StyledTestTable>
  );
}

export default TestTable;
