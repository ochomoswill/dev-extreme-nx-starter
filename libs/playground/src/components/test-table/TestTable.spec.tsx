import React from 'react';
import { render } from '@testing-library/react';

import TestTable from './TestTable';

describe('TestTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestTable />);
    expect(baseElement).toBeTruthy();
  });
});
