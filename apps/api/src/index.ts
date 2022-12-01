import server from '@/server'
import { serverRunningTemplate } from '@/utils/console'

const { API_PORT } = process.env

const port = parseInt(API_PORT ?? '5000', 10)

server
  .listen({ port })
  .then(() => console.log(serverRunningTemplate(port)))
  .catch((error) => console.error(error))
