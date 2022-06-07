import styled from '@emotion/styled'
import { Link, Stack } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import Navbar from '../../molecules/Navbar'

interface HeaderProps {
    pageWidth?: any
}



const Header: FC<HeaderProps> = ({ pageWidth }) => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    `

    const StyledContainer = styled(Stack)`
        margin: 0 auto;
        padding: 1rem;
    `

    return (
        <StyledHeader className={scroll ? "bg-light" : "bg-dark"}        >
            <StyledContainer direction="row" justifyContent="space-between">
                <Link href='/'>
                    <img src="/images/SVG/logo-doidon-white.svg" style={{filter: 'drop-shadow(3px 5px 5px rgb(0 0 0 / 0.9))'}} height="70px" alt="logo" />
                </Link>

                <Navbar />
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header