import { treaty } from '@elysia/eden'
import type { App } from '../api/[[...slugs]]/route'

export const client = treaty<App>("localhost:3000").api

const res = client.user.get()