import React from 'react';
import { Playground, PlaygroundProps } from './Playground';

export default {
  component: Playground,
  title: 'Playground',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: PlaygroundProps = {};

  return <Playground />;
};
