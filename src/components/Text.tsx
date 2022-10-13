// Isso aqui é qualquer coisa(COMPONENT/TAG) valida como children(filho/criança) no react
import { ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'

// Pra fazer condicionais no css
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  // O className é para caso futuramente eu queira adicionar novas classes
  className?: string
}

export function Text({ size = 'md', children, asChild, className }: TextProps) {
  // Se asChield for true, ela usa o Slot como component e com isso o Slot pega o filho dele e o transforma como o componente principal o substituindo
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
