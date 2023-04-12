export const regexValidateDisplayName = (displayName: string): boolean => {
  const pattern = /^[a-zA-Z0-9_-]{3,25}$/
  return pattern.test(displayName)
}
