import { TestList } from './TestList';
import { withKnobs, object } from '@storybook/addon-knobs';
import { employees } from './data';
import React from 'react';

export default {
  component: TestList,
  title: 'TestList',
  decorators: [withKnobs]
};


export const EmptyList = () => {
  return (
    <TestList
      dataSource={object('data', [])}
    />
  )
}


export const SimpleList = () => {
  return <TestList
    dataSource={object('data', ['One', 'Two', 'Three'])}
    grouped={false}
  />
}


export const GroupedList = () => {
  return (
    <TestList
      dataSource={object('data', employees)}
    />
  )
}



