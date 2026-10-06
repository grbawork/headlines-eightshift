import React from 'react';
import { ColumnsOptions } from './components/columns-options';
import { ColumnsEditor } from './components/columns-editor';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';

export const Columns = (props) => (
  <GutenbergBlock {...props} editor={ColumnsEditor} options={ColumnsOptions} />
);
