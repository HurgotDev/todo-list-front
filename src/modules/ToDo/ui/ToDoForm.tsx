/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC } from 'react'
import { Button } from '../../../shared/components/common/Button'
import { TextArea } from '../../../shared/components/common/TextArea'
import useToDoForm from '../lib/useToDoForm'
import { FormWrapper } from './styles/ToDoForm.styled'

export const ToDoForm: FC = () => {
  const {
    loading,
    register,
    handleSubmit
  } = useToDoForm()

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <div className="text-input">
          <TextArea
            placeholder='Escribe cualquier cosa...'
            {...register('text')}
          />
        </div>
        <Button bType='primary'>
          {
            loading ? 'Guardando...' : 'Guardar'
          }
        </Button>
      </FormWrapper>
    </form>
  )
}
