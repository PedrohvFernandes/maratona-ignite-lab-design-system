// O meta e o storyObj é um IntelliSense que ao passar a tipagem, ele consegue pegar todas as propriedades, que nesse caso que são os argumentos que um componente tem
import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from './Text'

// Aqui estamos exportando o Text que um componente. Components é uma subpasta
export default {
  // Aqui o titulo do nosso componente
  title: 'Components/Text',
  // O componente que estou documentando
  component: Text,
  // Os argumentos que possui no component e os dado padrão da chave(arg)
  args: {
    children: 'Span(Text) Medium Default.',
    size: 'md'
  },
  // Os types de argumentos que ele possui: ex: o Size e o children nesse caso, com isso consigo configurar como que vai aparecer os types nas variações no iframe(canvas) e se eu quiser que apareça etc. Default esta assim, mas por variação eu posso personalizar isso(argTypes/controls(controles)) e os dados(args). Ou seja, Cria um controle para as variantes de um componente no Storybook
  argTypes: {
  
    size: {
      name: 'Tamanho: ',
      options: ['sm', 'md', 'lg'],
      control:{
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

// Aqui seria as variantes desse componente. E nesse caso preciso exportar pelo menus uma variante, mesmo que não tenha e que é uma exportação que não esta como default aqui dentro. Obs: no lugar do Default eu poderia ter colocado primary ou qualquer outra coisa, mas por não ser uma variante e sim o padrão, então damos o nome de Default.
export const Default: StoryObj<TextProps> = {}

// Variantes de tamanho:

export const Small: StoryObj<TextProps> = {
  args: {
    children: 'Span(Text) Small',
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    children: 'Span(Text) Large',
    size: 'lg'
  }
}

// Variante de customização
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    // Retornando um componente react
    children: (<p>Text with P tag</p>)
  },
  argTypes:{
    children: {
      table:{
        disable: true
      }
    },
    asChild: {
      table:{
        disable: true
      }
    }
  }
}
