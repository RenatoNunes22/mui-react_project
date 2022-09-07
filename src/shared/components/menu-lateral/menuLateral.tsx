import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { useDrawerContext } from '../../contexts'

interface IListItemLinkProps {
  to: string
  label: string
  icon: string
  onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, label, icon, onClick }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(to)
    onClick?.()
  }
  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

interface IMenuLateral {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()
  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{ height: theme.spacing(10), width: theme.spacing(10) }} />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemLink
                to="/page-initial"
                icon="home"
                label="Page Initial"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
