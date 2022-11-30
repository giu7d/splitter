import server from '@/server'
import { serverRunningTemplate } from '@/utils/console'

const { ENV = 'development' } = process.env

const PORT = parseInt(process.env.PORT ?? '3333', 10)

server
  .listen({ port: PORT })
  .then(() => console.log(serverRunningTemplate(ENV, PORT)))
  .catch((error) => console.error(error))
