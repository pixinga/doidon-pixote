import styled from '@emotion/styled'
import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'


interface ContactProps {
  pageWidth?: any
}

const Contact: FC<ContactProps> = ({ pageWidth }) => {


  const Container = styled(Box)`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <Container id="contact" mb={4}>
      <Typography size='h2' weight='old'>
        Contato
      </Typography>

      <FlexSpacer minHeight={3} />

      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>

          <Typography size='h3' weight='old'>
            Contato para shows
          </Typography>

          <Typography size='h4' weight='old'>
            Casa 33
          </Typography>

          <FlexSpacer minHeight={3} />

          <Typography size='body'>
            <Link href={`mailto:contato@casa33.rio`}> contato@casa33.rio</Link>
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 3251-7252
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 98153-0571
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography size='h3' weight='old'>
            Acessoria de imprensa
          </Typography>

          <Typography size='h4' weight='old'>
            Casa 33
          </Typography>

          <FlexSpacer minHeight={3} />

          <Typography size='body'>
            <Link> contato@casa33.rio</Link>
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 3251-7252
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 98153-0571
          </Typography>

        </Grid>

        <Grid item xs={12} md={4}>

          <Typography size='h3' weight='old'>
            Loja:
          </Typography>

          <FlexSpacer minHeight={3} />

          <Typography size='h6'>
            {'Mercado Livre [link aqui]'}
          </Typography>
        </Grid>
      </Grid>




      <FlexSpacer minHeight={5} />


    </Container>
  )
}

export default Contact