import styled from "@emotion/styled"
import { IconButton } from "@mui/material"
import { FC } from "react"
import { theme } from "../../../../styles/theme"

interface OptionsProps {
    top?: number,
    right?: number
    id?: any
    size?: any
    sx?: any
    ref?: any
    maxWidth?: any
    maxHeight?: any
    maxHeightImg?: any
    maxWidthImg?: any
    onClick?: any
    children?: any
}

 
const OptionsButton: FC<OptionsProps> = ({ref, id, maxWidth, maxHeight, maxHeightImg,maxWidthImg, size, sx, top, right, onClick, children, ...props }) => {
    return (
        <IconButton
            sx={sx}
            ref={ref}
            id={id}
            style={{               
                position: 'absolute',
                top: top,
                right: right,
                borderRadius: 4,
                boxShadow: `0 0 0 .1rem ${theme.colors.neutral2}`,
                maxWidth: size !== 'small' ? '26px' : '22px',
                maxHeight: size !== 'small' ? '26px' : '22px',
                height: size !== 'small' ? '23px' : '22px',
                padding: 0,
                background: 'white',

            }}
            onClick={onClick}
        >
            <img
                src="/svg/icons/DotsThreeVertical.svg"
                alt="options icon cards"
                width={maxWidthImg}
                style={{
                    fontSize: '1.2rem',
                    padding: '.1rem',
                    zIndex: 1,
                    borderRadius: 4
                }}
                height={maxHeightImg}
            />
            {children}
        </IconButton>
    )
}

export default OptionsButton