/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React from 'react'
import Box from './Box'
import { useVariant } from './util'

export const Heading = React.forwardRef(function Heading(props, ref) {
  const variantStyle = useVariant('text', 'heading')
  return (
    <Box
      ref={ref}
      as="h2"
      {...props}
      __css={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        ...variantStyle,
      }}
    />
  )
})
