import { PrismaClient } from '@coffee-app/gen/prisma'
import { getPrismaClient } from './prisma/get-prisma-client'

export interface Context {
  prisma?: PrismaClient
  config?: Record<string, string>
}

export type ContextWith<TFields extends keyof Context> = Pick<Required<Context>, TFields>
export type DefaultContext = ContextWith<'prisma'>

export async function createContext<TWithKeys extends Array<keyof Context>>(
  withKeys: TWithKeys,
): Promise<ContextWith<TWithKeys[number]>>
export async function createContext<
  TWithKeys extends Array<keyof Context>,
  TContext extends Partial<Context>,
>(withKeys: TWithKeys, overrides: TContext): Promise<ContextWith<TWithKeys[number]> & TContext>
export async function createContext<
  TWithKeys extends Array<keyof Context>,
  TContext extends Partial<Context>,
>(withKeys: TWithKeys, overrides?: TContext): Promise<ContextWith<TWithKeys[number]> & TContext> {
  const ctx: Context = {}

  if (withKeys.includes('prisma') || withKeys.includes('config')) {
    ctx.prisma = getPrismaClient()
  }

  return {
    ...ctx,
    ...overrides,
  } as ContextWith<TWithKeys[number]> & TContext
}
