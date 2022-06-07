import styled from '@emotion/styled'
import { Grid, Link, List, ListItemButton, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import Typography from '../../atoms/Typography'
import ImgSwiper from '../../molecules/ImgSwiper'


interface HeroProps {
  isMobile?: any
  pageWidth?: any
}

const Hero: FC<HeroProps> = ({ pageWidth, isMobile }) => {


  const Container = styled(Stack)`
   
  `

  const HeroImage = styled(Stack)`
    background: linear-gradient(to left top, #000000ba, #ff000094),url(/images/foto_horiz.jpg) no-repeat 50% 50%;
    background-size: cover;
    filter: brightness(50%);
    box-shadow:   inset 0 24px 36px  40px  rgba(0,0,0,.);
    
    height: 100%;
    width: 100%;
    position: absolute;
`

  const HeroCenter = styled(Stack)`
    margin: 0 3rem;
  `

  return (
    <Container id="Hero">
      <HeroImage />

      <FlexSpacer minHeight={6} />

      <HeroCenter direction="row" justifyContent="space-between" sx={{ maxWidth: '100%', display: 'flex', height: '89vh' }}>


        <Stack direction="column" marginTop={{ xs: '100px', md: "auto" }} width={{ xs: '100%' }} mb="5%" color="white" zIndex={999}>

          {!isMobile ? <>
            {/* <Stack direction={{ sx: 'column', md: 'row' }}>

                <Typography size='h1' weight='old' sx={{ transform: 'rotate(3deg)', marginBottom: '-3rem', textShadow: '2px 7px 5px #0000008a' }}>
                  Doidon
                </Typography>

                <Typography size='h1' weight='old' sx={{ transform: 'rotate(-7deg)', marginBottom: '1rem', fontSize: '9rem', marginLeft: '2rem' ,textShadow: '2px 7px 5px #0000008a'}}>
                  Pixote
                </Typography>
              </Stack>

              <Typography size='h4' weight='old' sx={{ transform: 'rotate(-7deg)', marginBottom: '6rem', fontSize: '3rem', marginLeft: '2rem', textShadow: '2px 7px 5px #0000008a' }}>
                e os Van der Zicrey
              </Typography> */}
            <Typography size='h3' weight='old'>Bem-vindo ao</Typography>

            <Typography size='h1' weight='old'
              sx={{ marginBottom: '0', textShadow: '2px 7px 5px #0000008a' }}>
              Doidon Pixote</Typography>
            <Typography size='h2' weight='old'> e os Van der Zicrey</Typography>
          </>
            : <>
              <Typography size='h1' weight='old'>Doidon</Typography>
              <Typography size='h1' weight='old'>Pixote</Typography>
              <Typography size='h4' weight='old'> e os Van der Zicrey</Typography>
            </>
          }

          <Grid container spacing={2} rowSpacing={2} mt={3} style={{ maxWidth: "50%" }}>
            <Grid item direction="row">
              <Link
                sx={{ paddingLeft: 0 }}
                target="_blank"
                href="https://www.amazon.de/music/player/artists/B083PV5JS6/doidon-pixote-e-os-van-der-zicrey">
                <img src="/images/SVG/Amazon.svg" alt="amazon"
                  style={{ borderRadius: 5, border: '1px solid white' }}
                />
              </Link>
            </Grid>
            <Grid item direction="row">

              <Link
                target="_blank"
                href="https://open.spotify.com/artist/1H3kmZKczSXJ2jum4zrqR3">
                <img src="/images/SVG/Spotify.svg" alt="spotify"
                  style={{ borderRadius: 5, border: '1px solid white' }}
                />
              </Link>
            </Grid>
          </Grid>

        </Stack>


      </HeroCenter>


    </Container >
  )
}

export default Hero