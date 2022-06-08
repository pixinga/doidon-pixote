import styled from '@emotion/styled'
import { Link, Box, Grid, List, ListItem, ListItemButton, Stack, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { Copyright } from '../../atoms/Copyright'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import FooterLinks from '../../molecules/FooterLinks'
import { HashLink } from 'react-router-hash-link';

import { useNavigate } from "react-router-dom";
import Typography from '../../atoms/Typography'
import { theme } from '../../../styles/theme'

interface FooterProps {
    pageWidth?: any
}

const Footer: FC<FooterProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate();

    const StyledFooter = styled.footer`       
        maxWidth: ${pageWidth};
        bottom: 0;
        margin: 0 3rem;
    `
    const StyledImage = styled.img`
       width: 20px;
       filter: invert(1);
    `

    const linkData = [
        { src: '/images/facebook.svg', alt: 'facebook', url: 'https://www.facebook.com/doidonpixote' },
        { src: '/images/insta.svg', alt: 'insta', url: 'https://www.instagram.com/doidonpix/' },
        { src: '/images/spotify.svg', alt: 'spotify', url: 'https://open.spotify.com/artist/1H3kmZKczSXJ2jum4zrqR3' },
    ]

    return (
        <StyledFooter>
            <Stack direction="row" justifyContent="space-between" p={0}>
                <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={9}>
                        <FooterLinks />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Stack direction="column" justifyContent="space-between" >

                            <List style={{ minWidth: '100px', maxWidth: '200px', marginLeft: isMobile ? 'start' : 'auto' }}>
                                <Stack direction="row">
                                    {linkData.map((item, index) => (
                                        <Link target="_blank" href={item.url} sx={{ padding: '0 0 0 1rem', borderRadious: 50 }}>
                                            <StyledImage src={item.src} alt={item.alt} />
                                        </Link>
                                    ))}
                                </Stack>
                            </List>
                        </Stack>

                        <HashLink to="#home" smooth>
                            <img src="/images/SVG/logo-rot.svg" alt="logo" height={100} style={{ display: 'flex', margin: isMobile ? '1.8rem auto 2rem auto ' : '1.8rem -.8rem 2rem auto ' }} />
                        </HashLink>

                    </Grid>
                </Grid>


            </Stack>
            <Grid container flexDirection={isMobile ? 'column-reverse' : 'inherit'}>
                <Grid item xs={12} md={6}>
                    <Typography size='small'>Desenvovedor {' - '} <a href="http://cortesdev.de" target="_blank">{' '} CortesDev.de</a></Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Copyright />
                </Grid>
            </Grid>
        </StyledFooter>
    )
}

export default Footer