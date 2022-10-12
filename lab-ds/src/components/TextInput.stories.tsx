import { Meta, StoryObj } from '@storybook/react'
import { Envelope, Lock } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    // Pode retornar assim, um componente react:

    // children: (
    //   <>
    //     <TextInput.Icon>
    //       <Envelope />
    //     </TextInput.Icon>
    //     <TextInput.Input placeholder="Type yor e-mail address" type="email" />
    //   </>
    // )

    // Ou como um vetor pra tirar a tag de fragmento pra melhorar na documentação
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type yor e-mail address" type="email" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const IconLock: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input placeholder="*********" type="password" />
    ]
  }
}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Type yor e-mail address" type="email" />
    )
  }
}
