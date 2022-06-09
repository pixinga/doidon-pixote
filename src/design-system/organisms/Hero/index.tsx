import styled from '@emotion/styled'
import { Box, Grid, Link, Stack } from '@mui/material'
import { FC } from 'react'
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
            <Box ml={{xs: 1, md: 1.5}}>

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

            <Grid item direction="row">

              <Link
                target="_blank"
                href="https://open.spotify.com/artist/1H3kmZKczSXJ2jum4zrqR3">
                <img src="/images/SVG/playSpotify.svg" alt="spotify"
                  style={{ borderRadius: 5, border: '1px solid white' }}
                />
              </Link>
            </Grid>


            <Grid item direction="row" >
              <Link
                sx={{ paddingLeft: 0 }}
                target="_blank"
                href="https://www.deezer.com/de/artist/82755592">
                <img src="/images/SVG/deezer.svg" alt="deezer"
                  style={{ borderRadius: 5, border: '1px solid white' }}
                />
              </Link>
            </Grid>

            <Grid item direction="row">
              <Link
                sx={{ paddingLeft: 0 }}
                target="_blank"
                href="https://www.youtube.com/channel/UC0eWlr8seMGNJBNbOyaDkTQ">
                <img src="/images/SVG/youtube.svg" alt="youtube"
                  style={{ borderRadius: 5, border: '1px solid white' }}
                />
              </Link>
            </Grid>

            <Grid item direction="row">
              <Link
                sx={{ paddingLeft: 0 }}
                target="_blank"
                href="https://www.amazon.com.br/music/player/artists/B083PV5JS6/doidon-pixote-e-os-van-der-zicrey">
                <img src="/images/SVG/Amazon.svg" alt="amazon"
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
