// O preview.js é um arquivo de configuração do ambiente de preview do Storybook, o ambiente nada mais é que a onde a gente visualiza a documentação dos componentes, que é um iframe. Então tudo que importarmos aqui, vai estar disponível no iframe do Storybook.

// Storybook --> É uma ferramenta para criar componentes em um ambiente isolado

import { themes } from '@storybook/theming'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import '../src/styles/main.css'

initialize({
  onUnhandledRequest: 'bypass',
})

export const decorators = [mswDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  }
}