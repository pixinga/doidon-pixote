import { FC } from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import Typography from '../design-system/atoms/Typography'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'


interface SinglesProps {
    pageWidth?: any
}

const Singles: FC<SinglesProps> = ({ pageWidth }) => {

    const Singles = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

    return (
        <Singles id="Singles">


            <Typography size='h2' weight='old'>
                Discografia
            </Typography>
            <FlexSpacer minHeight={3} />


            <Typography size='h3' weight='old'>
                Singles
            </Typography>

            <FlexSpacer minHeight={3} />

            <Grid container spacing={4} margin="0 auto">
                <Grid item xs={12} md={3}>
                    <img src="/images/capa1.jpg" alt="capa" width="90%" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/capa2.jpg" alt="capa" width="90%" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/capa3.jpg" alt="capa" width="90%" />
                </Grid>
                <Grid item xs={12} md={3}
                    sx={
                        {
                            position: 'relative'
                        }
                    }>
                    <img src="/images/SVG/black.svg" alt="coming" width="90%" />
                    <Typography sx={
                        {
                            position: 'absolute',
                            top: '50%',
                        }
                    }>em breve mais <br /> pragmatismo</Typography>
                </Grid>
            </Grid>
        </Singles>
    )
}

export default Singles;