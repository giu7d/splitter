import { URL } from 'url'

import app from '@/app'
import { serverRunningTemplate } from '@/utils/console'

const { API_URL = '' } = process.env

const url = new URL(API_URL)
const host = url.hostname
const port = parseInt(url.port, 10)

app
  .listen({ host, port })
  .then(() => console.log(serverRunningTemplate(host, port)))
  .catch((error) => console.error(error))
