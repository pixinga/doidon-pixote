import styled from '@emotion/styled'
import { Box, Grid, Link, Stack } from '@mui/material'
import { FC } from 'react'
import { musicPlayers } from '../../../__mock__/musicPlayers'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import Typography from '../../atoms/Typography'

interface HeroProps {
  isMobile?: any
  pageWidth?: any
}

const Hero: FC<HeroProps> = ({ pageWidth, isMobile }) => {


  const Container = styled(Stack)`
   
  `

  const HeroImage = styled(Stack)`
    // background: linear-gradient(to left top, #000000ba, #ff000094),url(/images/foto_horiz.jpg) no-repeat 50% 50%;
     background: url(/images/foto_horiz-min.jpg) no-repeat 50% 50%;
    background-size: cover;
    filter: brightness(50%);
    box-shadow:   inset 0 24px 36px  40px  rgba(0,0,0,.);
    
    height: 100%;
    width: 100%;
    position: absolute;
`

  const HeroCenter = styled(Stack)`
    margin: 0 3rem;

    @media (max-width: 600px) {
      margin: 0 1.5rem;
    }
  `

  return (
    <Container id="Hero">
      <HeroImage />

      <FlexSpacer minHeight={6} />

      <HeroCenter direction="row" justifyContent="space-between" sx={{ maxWidth: '100%', display: 'flex', height: '89vh' }}>


        <Stack direction="column" marginTop={{ xs: '0', md: "auto" }} width={{ xs: '100%' }} mb="5%" color="white" zIndex={999}>

          {!isMobile ? <>
            <Box ml={{ xs: 1, md: 1.5 }}>

              <Typography size='h3' weight='old' mb={2}>Bem-vindo ao</Typography>

              <Typography size='h1' weight='old'
                sx={{ marginBottom: '0', textShadow: '2px 7px 5px #0000008a' }}>
                Doidon Pixote</Typography>
              <Typography size='h2' weight='old'> e os Van der Zicrey</Typography>
            </Box>
          </>
            : <>
              <Typography size='h3' weight='old' mb={1}>Bem-vindo ao</Typography>

              <Typography size='h2' weight='old'>Doidon Pixote</Typography>
              <Typography size='h3' weight='old'> e os Van der Zicrey</Typography>
            </>
          }

          <Grid container spacing={2} rowSpacing={2} ml={{ xs: .5 }} mt={3} mb={5} maxWidth={{ xs: "70%" }}>
            {musicPlayers.map((item, index) => (
              <Grid item direction="row" key={index}>
                <Link
                  target="_blank"
                  href={item.url}
                >
                  <img src={item.src} alt={item.alt}
                    style={{ borderRadius: 5, border: '1px solid white' }}
                  />
                </Link>
              </Grid>
            ))
            }
          </Grid>

        </Stack>


      </HeroCenter>


    </Container >
  )
}

export default Hero
