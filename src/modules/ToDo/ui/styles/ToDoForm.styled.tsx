import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > .text-input {
    flex: 1;

    & > textarea {
      min-height: 80px;
      max-height: 80px;
    }
  }
`
