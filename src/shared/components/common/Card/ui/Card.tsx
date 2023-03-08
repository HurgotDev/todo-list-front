import { type FC } from 'react'
import { type ICard } from '../@types/Card'
import { CardWrapper } from './styles/Card.styled'

export const Card: FC<ICard> = ({ children }) => {
  return (
    <CardWrapper>
      {children}
    </CardWrapper>
  )
}
