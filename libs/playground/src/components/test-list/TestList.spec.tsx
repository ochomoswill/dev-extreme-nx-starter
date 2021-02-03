import React from 'react';
import { render } from '@testing-library/react';

import TestList from './TestList';

describe('TestList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestList />);
    expect(baseElement).toBeTruthy();
  });
});
