import { Meta, StoryObj } from '@storybook/react'

import { CheckBox, CheckBoxProps } from './CheckBox'
import { Text } from './Text'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  // decorators --> São uma forma de a gente adicionar contexto, elementos a mais, alem do elemento principal que a gente esta mostrando em tela
  decorators:[
    // O story aqui no caso é o checkbox
    (Story) => {
      return(
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
