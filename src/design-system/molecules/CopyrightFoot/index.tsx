import { Box, Grid, Link, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { Copyright } from '../../atoms/Copyright'

import Typography from '../../atoms/Typography'
import { theme } from '../../../styles/theme'

interface CopyrightFootProps {
    pageWidth?: string
}

const CopyrightFoot: FC<CopyrightFootProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box bgcolor="#161616">

            <Grid container
                className="footer-note"
                flexDirection={isMobile ? 'column-reverse' : 'inherit'}
                sx={{ padding: '.5rem 3rem' }}
            >
                <Grid item xs={12} md={6} alignSelf='center'>
                    <Typography size='small'>Desenvovedor {' - '}
                        <a href="http://cortesdev.de" target="_blank">{' '} CortesDev.de</a></Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Copyright />
                </Grid>
            </Grid>

        </Box>
    )
}

export default CopyrightFoot