import { type FC } from 'react'
import { type IBaseLayout } from '../@types/BaseLayout'
import { Container, Main, Wrapper } from './styles/BaseLayout.styled'

export const BaseLayout: FC<IBaseLayout> = ({ children }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          {children}
        </Wrapper>
      </Container>
    </Main>
  )
}
