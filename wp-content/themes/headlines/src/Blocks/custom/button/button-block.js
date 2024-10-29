import React from 'react';
import { ButtonEditor } from './components/button-editor';
import { ButtonOptions } from './components/button-options';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';

export const Button = (props) => (
  <GutenbergBlock {...props} editor={ButtonEditor} options={ButtonOptions} />
);
