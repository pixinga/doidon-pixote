import { FC } from 'react';
import { Typography } from '../design-system/atoms/Typography/Typography'

const NoMatch: FC = () => {
  console.log("No match");

  return (
    <>
      <Typography size="h2" weight='regular'>Page not found!</Typography>
    </>
  )
}

export default NoMatch;