import { type NavIconType } from '../../../utils/types'

export default function AboutIcon(props: NavIconType): JSX.Element {
  return props.isSelected ? (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.88 14.793h-4.12v-9.6c0-2.24-1.213-2.693-2.693-1.013L16 5.393 6.973 15.66c-1.24 1.4-.72 2.547 1.147 2.547h4.12v9.6c0 2.24 1.213 2.693 2.693 1.013L16 27.607l9.027-10.267c1.24-1.4.72-2.547-1.147-2.547Z"
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
        d="M8.12 18.207h4.12v9.6c0 2.24 1.213 2.693 2.693 1.013l10.094-11.467c1.24-1.4.72-2.56-1.16-2.56h-4.12v-9.6c0-2.24-1.214-2.693-2.694-1.013L6.96 15.647c-1.227 1.413-.707 2.56 1.16 2.56Z"
        stroke="var(--color-light)"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
