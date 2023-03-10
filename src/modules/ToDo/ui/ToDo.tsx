import { type FC } from 'react'
import { Card } from '../../../shared/components/common/Card'
import { Title } from '../../../shared/components/common/Titles'
import { ToDoProvider } from '../lib/context/ToDo.context'
import { ListWrapper } from './styles/ToDo.styled'
import { ToDoForm } from './ToDoForm'
import { ToDoList } from './ToDoList'

export const ToDo: FC = () => {
  return (
    <ToDoProvider>
      <Card>
        <Title>ToDo List</Title>

        <ToDoForm />

        <ListWrapper>
          <ToDoList />
        </ListWrapper>

      </Card>
    </ToDoProvider>
  )
}
