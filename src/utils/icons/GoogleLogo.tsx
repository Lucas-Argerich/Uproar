import { type SVGProps } from 'react'

export default function GoogleLogo(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width={16}
      viewBox={'0 0 16 18'}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M15.977 9.392c0-.67-.054-1.158-.172-1.664H8.163v3.02h4.486c-.09.751-.579 1.882-1.664 2.642l-.016.1 2.417 1.873.167.016c1.538-1.42 2.424-3.509 2.424-5.987Z"
          fill="#4285F4"
        />
        <path
          d="M8.163 17.351c2.198 0 4.043-.723 5.39-1.972l-2.568-1.99c-.688.48-1.61.815-2.822.815-2.153 0-3.98-1.42-4.631-3.383l-.095.008-2.513 1.945-.033.091a8.134 8.134 0 0 0 7.272 4.486Z"
          fill="#34A853"
        />
        <path
          d="M3.532 10.821a5.01 5.01 0 0 1-.271-1.61c0-.56.1-1.103.262-1.61l-.005-.108L.974 5.518l-.083.04A8.148 8.148 0 0 0 .023 9.21c0 1.312.316 2.55.868 3.654l2.641-2.044Z"
          fill="#FBBC05"
        />
        <path
          d="M8.163 4.219c1.528 0 2.56.66 3.147 1.212l2.297-2.243c-1.41-1.312-3.246-2.117-5.444-2.117A8.134 8.134 0 0 0 .89 5.557l2.632 2.044C4.183 5.64 6.01 4.22 8.163 4.22Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(0 .9)" d="M0 0h16v16.653H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
