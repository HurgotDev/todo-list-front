import 'styled-components'

const styledTheme = {
  colors: {
    primary: '#3b71ca',
    error: '#ff00008a',
    light: '#d3d3d3',
    grey: '#878787',
    success: '#318549'
  },
  breakpoints: {
    xs: {
      min: '0px',
      max: '575px'
    },
    sm: {
      min: '576px',
      max: '767px'
    },
    md: {
      min: '768px',
      max: '991px'
    },
    lg: {
      min: '992px',
      max: '1199px'
    },
    xl: {
      min: '1200px',
      max: '1599px'
    },
    xxl: {
      min: '1600px',
      max: '2024px'
    }
  }
}

export type TStyleTeme = typeof styledTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TStyleTeme {
    // TODO
  }
}

export default styledTheme
