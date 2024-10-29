import React from 'react'
import { __ } from '@wordpress/i18n'
import { PanelBody } from '@wordpress/components'
import {
  Select,
  checkAttr,
  getAttrKey,
  getOption,
  props,
  OptionSelector,
} from '@eightshift/frontend-libs/scripts'

import manifest from '../manifest.json'

export const GridCardsOptions = ({ attributes, setAttributes }) => {
  const gridCardsGridTemplateColumns = checkAttr(
    'gridCardsGridTemplateColumns',
    attributes,
    manifest
  )

  return (
    <PanelBody title={__('Grid Cards', 'headlines')}>
      <Select
        label={__('Set number of columns', 'headlines')}
        placeholder={__(gridCardsGridTemplateColumns, 'headlines')}
        value={gridCardsGridTemplateColumns}
        options={getOption(
          'gridCardsGridTemplateColumns',
          attributes,
          manifest
        )}
        onChange={(value) =>
          setAttributes({
            [getAttrKey('gridCardsGridTemplateColumns', attributes, manifest)]:
              value,
          })
        }
        multiple={false}
        closeMenuAfterSelect
        simpleValue
      />
    </PanelBody>
  )
}
