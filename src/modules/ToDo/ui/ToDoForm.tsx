import { type FC } from 'react'
import { Button } from '../../../shared/components/common/Button'
import { TextArea } from '../../../shared/components/common/TextArea'
import { FormWrapper } from './styles/ToDoForm.styled'

export const ToDoForm: FC = () => {
  return (
    <form>
      <FormWrapper>
        <div className="text-input">
          <TextArea placeholder='Escribe cualquier cosa...' />
        </div>
        <Button bType='primary'>Enviar</Button>
      </FormWrapper>
    </form>
  )
}
