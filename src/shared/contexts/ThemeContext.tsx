import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { DarkTheme, LightTheme } from '../theme'
import { Box, ThemeProvider } from '@mui/material'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContextData)
export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}
interface IAppThemeProviderProps {
  children: React.ReactNode
}
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')
  const toggleTheme = useCallback(() => {
    setThemeName((oldthemeName) =>
      oldthemeName === 'light' ? 'dark' : 'light',
    )
  }, [])
  const theme = useMemo(() => {
    return themeName === 'light' ? LightTheme : DarkTheme
  }, [themeName])
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
