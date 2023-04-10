import React from 'react'
import styled from 'styled-components'

interface IProfilePicture {
  url: string
  size?: number
}

const Picture = styled.div<IProfilePicture>`
  background-color: var(--color-primary);
  background-image: url(${(props) => props.url});
  background-position: center center;
  border-radius: 55px;
  height: ${(props) => props.size ?? 100}px;
  width: ${(props) => props.size ?? 100}px;
`

export default function ProfilePicture({
  url,
  size
}: IProfilePicture): JSX.Element {
  return <Picture url={url} size={size} />
}
