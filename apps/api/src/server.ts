import app from '@/app'

app
  .listen()
  .then(() => console.log('Running...'))
  .catch((error) => console.error(error))

export default app
