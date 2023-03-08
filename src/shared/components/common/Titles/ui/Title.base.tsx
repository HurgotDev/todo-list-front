import styled, { type DefaultTheme, type StyledComponent } from 'styled-components'
import { type ICreateBaseTitleProps } from '../@types/Title.base'

const createBaseTitle = ({ level }: ICreateBaseTitleProps): StyledComponent<any, DefaultTheme, any, 'never'> => {
  return styled[level]`
    font-weight: bold;
    margin-bottom: 0.8 rem;
  `
}

export default createBaseTitle
