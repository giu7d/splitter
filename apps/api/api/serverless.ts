import type { VercelRequest, VercelResponse } from '@vercel/node'

import app from './build/app'

export default async (req: VercelRequest, res: VercelResponse) => {
  await app.ready()
  app.server.emit('request', req, res)
}
