
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled } from "@mui/material/styles";
 
const StyledTooltip = styled(Tooltip)`
    & > ul {
        list-style: disc !important;
        list-style-type: circle !important;
    }
`

const LightTooltipHtml = styled(({ className, ...props }: TooltipProps) => (
  <StyledTooltip classes={{ popper: className }} {...props} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],    
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));



export default LightTooltipHtml