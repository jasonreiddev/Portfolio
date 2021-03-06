import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Pagination} from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const FirstProjectPage = Template.bind({});
FirstProjectPage.args = {
  pageSize: 5,
  totalCount: 20,
  currentPage: 1,
  base: '/projects',
};

export const LastProjectPage = Template.bind({});
LastProjectPage.args = {
  pageSize: 5,
  totalCount: 20,
  currentPage: 1,
  base: '/projects',
};

export const Blank = Template.bind({});
Blank.args = {
  pageSize: null,
  totalCount: null,
  currentPage: null,
  base: null,
};
