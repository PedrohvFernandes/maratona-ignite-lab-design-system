import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading(h2) Medium Default.',
    size: 'md'
  },
  argTypes: {
  
    size: {
      name: 'Tamanho: ',
      options: ['sm', 'md', 'lg'],
      control:{
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading(h2) Small',
    size: 'sm'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading(h2) Large',
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (<h1>Heading with H1 tag</h1>)
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
