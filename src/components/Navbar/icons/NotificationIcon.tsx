import { type NavIconType } from '../../../utils/types'
export default function NotificationIcon(props: NavIconType): JSX.Element {
  return props.isSelected ? (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m25.787 19.82-1.334-2.213c-.28-.494-.533-1.427-.533-1.974V12.26a7.88 7.88 0 0 0-4.493-7.107 3.902 3.902 0 0 0-3.44-1.986c-1.454 0-2.76.786-3.454 2.026-2.6 1.294-4.4 3.974-4.4 7.067v3.373c0 .547-.253 1.48-.533 1.96L6.253 19.82c-.533.893-.653 1.88-.32 2.787.32.893 1.08 1.586 2.067 1.92a24.937 24.937 0 0 0 8.027 1.306c2.72 0 5.44-.426 8.026-1.293a3.198 3.198 0 0 0 2-1.933 3.169 3.169 0 0 0-.266-2.787Zm-6.014 7.36A4.018 4.018 0 0 1 16 29.833a3.954 3.954 0 0 1-2.827-1.186 3.681 3.681 0 0 1-.933-1.48c.173.026.347.04.533.066.307.04.627.08.947.107.76.067 1.533.107 2.307.107.76 0 1.52-.04 2.266-.107.28-.027.56-.04.827-.08l.653-.08Z"
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
        d="M16.027 4.38c-4.414 0-8 3.587-8 8v3.853c0 .814-.347 2.054-.76 2.747l-1.534 2.547c-.946 1.573-.293 3.32 1.44 3.906a27.895 27.895 0 0 0 17.694 0c1.613-.533 2.32-2.44 1.44-3.906l-1.534-2.547c-.4-.693-.746-1.933-.746-2.747V12.38c0-4.4-3.6-8-8-8Z"
        stroke="var(--color-light)"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M18.493 4.767a9.005 9.005 0 0 0-4.933 0 2.647 2.647 0 0 1 2.467-1.68c1.12 0 2.08.693 2.466 1.68Z"
        stroke="var(--color-light)"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.027 25.913c0 2.2-1.8 4-4 4A4.014 4.014 0 0 1 13.2 28.74a4.014 4.014 0 0 1-1.173-2.827"
        stroke="var(--color-light)"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </svg>
  )
}
