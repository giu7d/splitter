import server from '@/server'
import { serverRunningTemplate } from '@/utils/console'

const { HOST = '0.0.0.0', PORT = '4000' } = process.env

const host = HOST
const port = parseInt(PORT, 10)

server
  .listen({ host, port })
  .then(() => console.log(serverRunningTemplate(host, port)))
  .catch((error) => console.error(error))
