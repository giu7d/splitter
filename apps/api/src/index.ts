import server from '@/src/server'
import { serverRunningTemplate } from '@/src/utils/console'

const { ENV = 'development' } = process.env

const PORT = parseInt(process.env.PORT ?? '3333', 10)

server
  .listen({ port: PORT })
  .then(() => console.log(serverRunningTemplate(ENV, PORT)))
  .catch((error) => console.error(error))
