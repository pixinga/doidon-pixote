import { Box, Button, ButtonProps, Stack } from '@mui/material'
import { FC } from 'react'
import Typography from '../../Typography'

interface CustomButtonProps {
    variant: any
    image?: any
    title?: any
    stroke?: any
    color?: any
    alt?: any
    Props?: any
    ml?: any
    mr?: any
    onClick?: any
    style?: any
}

const CustomButton: FC<CustomButtonProps> = ({ style, onClick, ml, mr, image, title, stroke, variant, color, alt, ...Props }) => {
    return (
        <Button
            {...Props}
            variant={!variant ? 'contained' : variant}
            color={!color ? 'primary' : variant}
            onClick={onClick}
            style={style}
        >
            <Stack direction="row" mr={mr} ml={ml}
                sx={{
                    maxHeight: 40,
                    maxWidth: 150
                }}>
                {image && <img
                    alt={alt}
                    color={stroke}
                    src={image}
                    width={20}
                    height={20}
                />}
                <div
                    style={{ width: "auto", marginLeft: "10px", textTransform: "none" }}
                >
                    <Typography weight="medium">{title}</Typography>
                </div>
            </Stack>
        </Button>
    )
}

export default CustomButton