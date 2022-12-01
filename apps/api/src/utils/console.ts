export const useColor = (color: string) => (content: string) => {
  switch (color) {
    case 'purple':
      return `\x1b[35m${content}\x1b[39m`

    case 'green':
      return `\x1b[92m${content}\x1b[39m`

    case 'blue':
      return `\x1b[94m${content}\x1b[39m`

    default:
      return content
  }
}

export const usePurpleColor = useColor('purple')

export const useGreenColor = useColor('green')

export const useBlueColor = useColor('blue')

export const serverRunningTemplate = (host: string, port: number) => `
    ░█▀█░█▀█░▀█▀
    ░█▀█░█▀▀░░█░
    ░▀░▀░▀░░░▀▀▀ v1.0.0

    --------------------------
    \tListening at:
    \t${useBlueColor(`${host}:${port}`)}
    --------------------------
  `
