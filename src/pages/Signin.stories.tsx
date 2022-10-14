import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { Signin } from './Signin'

export default {
  title: 'Pages/Signin',
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login Realizado!'
            }),
            ctx.status(200)
          )
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu email'),
      'pedrohv20fernandes@gmail.com'
    )
    userEvent.type(canvas.getByPlaceholderText('********'), '12345678')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
    })
  }
}
