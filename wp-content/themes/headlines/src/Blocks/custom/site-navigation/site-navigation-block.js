import React from 'react';
import { SiteNavigationEditor } from './components/site-navigation-editor';
import { SiteNavigationOptions } from './components/site-navigation-options';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';

export const SiteNavigation = (props) => (
  <GutenbergBlock
    {...props}
    editor={SiteNavigationEditor}
    options={SiteNavigationOptions}
  />
);
