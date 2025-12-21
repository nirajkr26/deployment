import * as dotenv from 'dotenv'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
dotenv.config()

const connectionString = `${process.env.DATABASE_URL}`

console.log(connectionString)

const adapter = new PrismaPg({ connectionString })
const client = new PrismaClient({ adapter })

export { client }