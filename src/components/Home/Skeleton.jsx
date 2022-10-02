import React from 'react'
import { Box, SkeletonM, SkeletonM1 } from './style'

const Skeleton = () => {
  return (
    <Box>
        <SkeletonM variant="rectangular" animation='wave' />
        <SkeletonM1 variant="rectangular" animation='wave' />
    </Box>
  )
}

export default Skeleton