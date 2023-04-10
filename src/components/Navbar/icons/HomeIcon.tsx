import { type NavIconType } from '../../../utils/types'

export default function HomeIcon(props: NavIconType): JSX.Element {
  return props.isSelected ? (
    <svg width={32} height={33} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m27.813 11.66-9.24-7.387c-1.426-1.146-3.733-1.146-5.146-.013l-9.24 7.4c-1.04.827-1.707 2.573-1.48 3.88L4.48 26.153c.32 1.894 2.133 3.427 4.053 3.427h14.934c1.906 0 3.733-1.547 4.053-3.427l1.773-10.613c.214-1.307-.453-3.053-1.48-3.88ZM16 21.167a3.333 3.333 0 1 1 0-6.667 3.333 3.333 0 0 1 0 6.667Z"
        fill="var(--color-light)"
      />
    </svg>
  ) : (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m13.427 4.26-9.24 7.4c-1.04.827-1.707 2.573-1.48 3.88L4.48 26.153c.32 1.894 2.133 3.427 4.053 3.427h14.934c1.906 0 3.733-1.547 4.053-3.427l1.773-10.613c.214-1.307-.453-3.053-1.48-3.88l-9.24-7.387c-1.426-1.146-3.733-1.146-5.146-.013Z"
        stroke="var(--color-light)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 21.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
        stroke="var(--color-light)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
