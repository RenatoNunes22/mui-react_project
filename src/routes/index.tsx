import { Button } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppThemeContext, useDrawerContext } from '../shared/contexts'

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext()
  const { toggleTheme } = useAppThemeContext()
  return (
    <Routes>
      <Route
        path="/page-initial"
        element={
          <>
            <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
              NavBar
            </Button>
            <br />
            <Button variant="contained" color="primary" onClick={toggleTheme}>
              Switch theme
            </Button>
          </>
        }
      />
      {/* <Route path="/*" element={<Navigate to="page-initial" />} /> */}
    </Routes>
  )
}
