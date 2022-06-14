import styled from '@emotion/styled';
import { List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '../../atoms/Typography';


const StyledListItem = styled(ListItem)`
text-shadow: 2px 7px 5px #0000008a;

&:hover {
    transform: scale(.88);
}
}`;

const StyledLink = styled(Link)`
    
`;
const Navbar = () => {

    return (
        <List sx={{ alignSelf: 'center' }}>
            <Stack direction="row">
                <StyledListItem
                //  sx={{ transform: 'rotate(2deg)' }}
                >
                    <StyledLink to="#home" smooth>
                        <Typography size="h3" weight='old'>home</Typography>
                    </StyledLink>
                </StyledListItem>

                <StyledListItem
                //  sx={{ transform: 'rotate(2deg)' }}
                >
                    <StyledLink to="#discografia" smooth>
                        <Typography size="h3" weight='old'>discografia</Typography>
                    </StyledLink>
                </StyledListItem>


                <StyledListItem
                // sx={{ transform: 'scale(1.35) rotate(-5deg)' }}
                >
                    <StyledLink to="#agenda" smooth>
                        <Typography size="h3" weight='old'>agenda</Typography>

                    </StyledLink>
                </StyledListItem>
                <StyledListItem
                // sx={{ transform: 'rotate(3deg)' }}
                >
                    <StyledLink to="#videos" smooth>
                        <Typography size="h3" weight='old'>videos</Typography>

                    </StyledLink>
                </StyledListItem>
                <StyledListItem
                // sx={{ transform: 'scale(1.5) rotate(-3.5deg)' }}
                >
                    <StyledLink to="#contact" smooth>
                        <Typography size="h3" weight='old'>contato</Typography>
                    </StyledLink>
                </StyledListItem>
                <StyledListItem
                // sx={{ transform: 'scale(1.5) rotate(-3.5deg)' }}
                >
                    <a rel="noreferrer" target="_blank" href="https://produto.mercadolivre.com.br/MLB-2674669920-camisa-doidon-pixote-xg-_JM?searchVariation=174626582834#searchVariation=174626582834&position=3&search_layout=stack&type=item&tracking_id=418c8d12-6aa7-4345-8485-6fb2ee49bd20">
                        <Typography size="h3" weight='old'>loja</Typography>
                    </a>
                </StyledListItem>
            </Stack>
        </List>

    )
}

export default Navbar