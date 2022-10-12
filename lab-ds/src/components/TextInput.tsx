import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

// Pattern(padronização) de composição:

function TextInputRoot(props: TextInputRootProps) {
  return (
    // focus-within --> para que a pessoa que esta agrupando no caso a div pegue estilização, caso um dos seus filhos esteja focado
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 transition-all focus-within:ring-2 ring-cyan-300 hover:ring-2">
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

// Para forçar o nome do componente
TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ ...res }: TextInputInputProps) {
  return (
    <input
      {...res}
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400 "
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
