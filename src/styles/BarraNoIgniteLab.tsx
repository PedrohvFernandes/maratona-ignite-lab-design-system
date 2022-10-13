import { SVGAttributes } from 'react'

interface BarraNoIgniteLabProps extends SVGAttributes<HTMLOrSVGElement> {}

export function BarraNoIgniteLab(props: BarraNoIgniteLabProps) {
  return (
    <svg
      width={2}
      height={28}
      viewBox="0 0 2 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#9BE1FB" d="M0 0H2V28H0z" />
    </svg>
  )
}
