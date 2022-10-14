import { CheckBox } from '../components/CheckBox'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { TextInput } from '../components/TextInput'
import { Text } from '../components/Text'
import { Logo } from '../styles/Logo'
import { BarraNoIgniteLab } from '../styles/BarraNoIgniteLab'
import { FormEvent, useState } from 'react'
import axios from 'axios'

export function Signin() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignin (event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'pedrohv20fernandes@gmail.com',
      password: '123456789'
    })

    setIsUserSignedIn(true)

  }


  return (
    <div className="w-screen bg-gray-900 bg-react bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4 flex items-center gap-1">
          Ignite <BarraNoIgniteLab /> <span className="text-cyan-300">Lab</span>
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!{' '}
        </Text>
      </header>

      <form onSubmit={handleSignin} className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        {isUserSignedIn && <Text>Login Realizado!</Text>}

        <label htmlFor="Email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              placeholder="Digite seu email"
              id="Email"
              name="Email"
              type="email"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="Password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              placeholder="********"
              id="Password"
              name="Password"
              type="password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-400 underline transition-all hover:text-gray-200 group"
          >
            Esqueceu sua senha? <span className="group-hover:text-cyan-300">Recuperar</span>
          </a>
        </Text>
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-400 underline transition-all hover:text-gray-200 group"
          >
            Não possui conta?{' '}
            <span className="group-hover:text-cyan-300 ">Crie uma agora!</span>
          </a>
        </Text>
      </footer>
    </div>
  )
}
