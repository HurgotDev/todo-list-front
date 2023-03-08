import { ThemeProvider } from 'styled-components'
import { ToDo } from './modules/ToDo'
import { BaseLayout } from './shared/components/layouts/BaseLayout'
import { StyledGlobal } from './styles/global.styles'
import styledTheme from './styles/styled-theme'

function App (): JSX.Element {
  return (
    <ThemeProvider theme={styledTheme}>
      <StyledGlobal />
      <BaseLayout>
        <ToDo />
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App
