import React from 'react';
import { TestTable, TestTableProps } from './TestTable';

export default {
  component: TestTable,
  title: 'TestTable',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TestTableProps = {};

  return <TestTable />;
};
