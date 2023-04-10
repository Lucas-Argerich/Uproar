import { type SVGProps } from 'react'

export default function ArrowLeft(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 19.92 8.98 13.4c-.77-.77-.77-2.03 0-2.8l6.52-6.52"
        stroke="#EBEBEB"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
