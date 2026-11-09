/**
 * Express app configuration.
 * Responsibilities:
 *  - Base routes (/, /health)
 *  - Mount application routers
 *  - Global error handler
 */
import express from 'express'
import versionRouter from './routes/auto/version.route.js'
import infoRouter from './routes/auto/info.route.js'
import boomRouter from './routes/auto/boom.route.js'
import { errorHandler } from './utils/errorHandler.js'

const app = express()

// Base routes
app.get('/', (_req, res) =>
  res.json({ ok: true, message: 'Hello from CI/CD demo 👋' })
)

app.get('/health', (_req, res) => res.status(200).send('OK'))

// Application routes
app.use('/', versionRouter)
app.use('/', infoRouter)
app.use('/', boomRouter)

// Global error middleware last
app.use(errorHandler)

export default app
