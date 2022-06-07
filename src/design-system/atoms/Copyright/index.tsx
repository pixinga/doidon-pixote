import { Box } from "@mui/material"
import Typography from "../Typography"

export const Copyright = ({ ...props }) => {
  return (
    <Box alignSelf='end' textAlign="right" display="flex">
      <Typography size="small" ml="auto"  mr="auto" >
        {'© '}
        {`${new Date().getFullYear()} `}
        Doidon Pixote <br /> todos os direitos reservados
      </Typography>
    </Box>
  )
}
