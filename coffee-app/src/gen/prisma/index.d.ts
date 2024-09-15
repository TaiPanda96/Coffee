
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Coffee
 * 
 */
export type Coffee = $Result.DefaultSelection<Prisma.$CoffeePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coffees
 * const coffees = await prisma.coffee.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Coffees
   * const coffees = await prisma.coffee.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  /**
   * Gives access to the client metrics in json or prometheus format.
   * 
   * @example
   * ```
   * const metrics = await prisma.$metrics.json()
   * // or
   * const metrics = await prisma.$metrics.prometheus()
   * ```
   */
  readonly $metrics: runtime.MetricsClient
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.coffee`: Exposes CRUD operations for the **Coffee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coffees
    * const coffees = await prisma.coffee.findMany()
    * ```
    */
  get coffee(): Prisma.CoffeeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Coffee: 'Coffee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "coffee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Coffee: {
        payload: Prisma.$CoffeePayload<ExtArgs>
        fields: Prisma.CoffeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoffeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoffeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>
          }
          findFirst: {
            args: Prisma.CoffeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoffeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>
          }
          findMany: {
            args: Prisma.CoffeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>[]
          }
          create: {
            args: Prisma.CoffeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>
          }
          createMany: {
            args: Prisma.CoffeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoffeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>[]
          }
          delete: {
            args: Prisma.CoffeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>
          }
          update: {
            args: Prisma.CoffeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>
          }
          deleteMany: {
            args: Prisma.CoffeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoffeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoffeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoffeePayload>
          }
          aggregate: {
            args: Prisma.CoffeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoffee>
          }
          groupBy: {
            args: Prisma.CoffeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoffeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoffeeCountArgs<ExtArgs>
            result: $Utils.Optional<CoffeeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    coffee?: CoffeeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Coffee
   */

  export type AggregateCoffee = {
    _count: CoffeeCountAggregateOutputType | null
    _avg: CoffeeAvgAggregateOutputType | null
    _sum: CoffeeSumAggregateOutputType | null
    _min: CoffeeMinAggregateOutputType | null
    _max: CoffeeMaxAggregateOutputType | null
  }

  export type CoffeeAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    rating: Decimal | null
    reviews: Decimal | null
  }

  export type CoffeeSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    rating: Decimal | null
    reviews: Decimal | null
  }

  export type CoffeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    roaster: string | null
    quantity: number | null
    quantityDescription: string | null
    price: Decimal | null
    rating: Decimal | null
    currencyCode: string | null
    reviews: Decimal | null
    img: string | null
    productUrl: string | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    brewMethod: string | null
    tasteNotes: string | null
    process: string | null
    region: string | null
    roastLevel: string | null
  }

  export type CoffeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    roaster: string | null
    quantity: number | null
    quantityDescription: string | null
    price: Decimal | null
    rating: Decimal | null
    currencyCode: string | null
    reviews: Decimal | null
    img: string | null
    productUrl: string | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    brewMethod: string | null
    tasteNotes: string | null
    process: string | null
    region: string | null
    roastLevel: string | null
  }

  export type CoffeeCountAggregateOutputType = {
    id: number
    name: number
    roaster: number
    quantity: number
    quantityDescription: number
    price: number
    rating: number
    currencyCode: number
    reviews: number
    img: number
    productUrl: number
    sourceUrl: number
    createdAt: number
    updatedAt: number
    brewMethod: number
    tasteNotes: number
    process: number
    region: number
    roastLevel: number
    _all: number
  }


  export type CoffeeAvgAggregateInputType = {
    quantity?: true
    price?: true
    rating?: true
    reviews?: true
  }

  export type CoffeeSumAggregateInputType = {
    quantity?: true
    price?: true
    rating?: true
    reviews?: true
  }

  export type CoffeeMinAggregateInputType = {
    id?: true
    name?: true
    roaster?: true
    quantity?: true
    quantityDescription?: true
    price?: true
    rating?: true
    currencyCode?: true
    reviews?: true
    img?: true
    productUrl?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
    brewMethod?: true
    tasteNotes?: true
    process?: true
    region?: true
    roastLevel?: true
  }

  export type CoffeeMaxAggregateInputType = {
    id?: true
    name?: true
    roaster?: true
    quantity?: true
    quantityDescription?: true
    price?: true
    rating?: true
    currencyCode?: true
    reviews?: true
    img?: true
    productUrl?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
    brewMethod?: true
    tasteNotes?: true
    process?: true
    region?: true
    roastLevel?: true
  }

  export type CoffeeCountAggregateInputType = {
    id?: true
    name?: true
    roaster?: true
    quantity?: true
    quantityDescription?: true
    price?: true
    rating?: true
    currencyCode?: true
    reviews?: true
    img?: true
    productUrl?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
    brewMethod?: true
    tasteNotes?: true
    process?: true
    region?: true
    roastLevel?: true
    _all?: true
  }

  export type CoffeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coffee to aggregate.
     */
    where?: CoffeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coffees to fetch.
     */
    orderBy?: CoffeeOrderByWithRelationInput | CoffeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoffeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coffees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coffees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coffees
    **/
    _count?: true | CoffeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoffeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoffeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoffeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoffeeMaxAggregateInputType
  }

  export type GetCoffeeAggregateType<T extends CoffeeAggregateArgs> = {
        [P in keyof T & keyof AggregateCoffee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoffee[P]>
      : GetScalarType<T[P], AggregateCoffee[P]>
  }




  export type CoffeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoffeeWhereInput
    orderBy?: CoffeeOrderByWithAggregationInput | CoffeeOrderByWithAggregationInput[]
    by: CoffeeScalarFieldEnum[] | CoffeeScalarFieldEnum
    having?: CoffeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoffeeCountAggregateInputType | true
    _avg?: CoffeeAvgAggregateInputType
    _sum?: CoffeeSumAggregateInputType
    _min?: CoffeeMinAggregateInputType
    _max?: CoffeeMaxAggregateInputType
  }

  export type CoffeeGroupByOutputType = {
    id: string
    name: string
    roaster: string
    quantity: number
    quantityDescription: string | null
    price: Decimal
    rating: Decimal
    currencyCode: string
    reviews: Decimal | null
    img: string
    productUrl: string
    sourceUrl: string
    createdAt: Date
    updatedAt: Date
    brewMethod: string | null
    tasteNotes: string | null
    process: string | null
    region: string | null
    roastLevel: string | null
    _count: CoffeeCountAggregateOutputType | null
    _avg: CoffeeAvgAggregateOutputType | null
    _sum: CoffeeSumAggregateOutputType | null
    _min: CoffeeMinAggregateOutputType | null
    _max: CoffeeMaxAggregateOutputType | null
  }

  type GetCoffeeGroupByPayload<T extends CoffeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoffeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoffeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoffeeGroupByOutputType[P]>
            : GetScalarType<T[P], CoffeeGroupByOutputType[P]>
        }
      >
    >


  export type CoffeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roaster?: boolean
    quantity?: boolean
    quantityDescription?: boolean
    price?: boolean
    rating?: boolean
    currencyCode?: boolean
    reviews?: boolean
    img?: boolean
    productUrl?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brewMethod?: boolean
    tasteNotes?: boolean
    process?: boolean
    region?: boolean
    roastLevel?: boolean
  }, ExtArgs["result"]["coffee"]>

  export type CoffeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roaster?: boolean
    quantity?: boolean
    quantityDescription?: boolean
    price?: boolean
    rating?: boolean
    currencyCode?: boolean
    reviews?: boolean
    img?: boolean
    productUrl?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brewMethod?: boolean
    tasteNotes?: boolean
    process?: boolean
    region?: boolean
    roastLevel?: boolean
  }, ExtArgs["result"]["coffee"]>

  export type CoffeeSelectScalar = {
    id?: boolean
    name?: boolean
    roaster?: boolean
    quantity?: boolean
    quantityDescription?: boolean
    price?: boolean
    rating?: boolean
    currencyCode?: boolean
    reviews?: boolean
    img?: boolean
    productUrl?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brewMethod?: boolean
    tasteNotes?: boolean
    process?: boolean
    region?: boolean
    roastLevel?: boolean
  }

  export type CoffeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "roaster" | "quantity" | "quantityDescription" | "price" | "rating" | "currencyCode" | "reviews" | "img" | "productUrl" | "sourceUrl" | "createdAt" | "updatedAt" | "brewMethod" | "tasteNotes" | "process" | "region" | "roastLevel", ExtArgs["result"]["coffee"]>

  export type $CoffeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coffee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      roaster: string
      quantity: number
      quantityDescription: string | null
      price: Prisma.Decimal
      rating: Prisma.Decimal
      currencyCode: string
      reviews: Prisma.Decimal | null
      img: string
      productUrl: string
      sourceUrl: string
      createdAt: Date
      updatedAt: Date
      brewMethod: string | null
      tasteNotes: string | null
      process: string | null
      region: string | null
      roastLevel: string | null
    }, ExtArgs["result"]["coffee"]>
    composites: {}
  }

  type CoffeeGetPayload<S extends boolean | null | undefined | CoffeeDefaultArgs> = $Result.GetResult<Prisma.$CoffeePayload, S>

  type CoffeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoffeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoffeeCountAggregateInputType | true
    }

  export interface CoffeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coffee'], meta: { name: 'Coffee' } }
    /**
     * Find zero or one Coffee that matches the filter.
     * @param {CoffeeFindUniqueArgs} args - Arguments to find a Coffee
     * @example
     * // Get one Coffee
     * const coffee = await prisma.coffee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoffeeFindUniqueArgs>(args: SelectSubset<T, CoffeeFindUniqueArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Coffee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoffeeFindUniqueOrThrowArgs} args - Arguments to find a Coffee
     * @example
     * // Get one Coffee
     * const coffee = await prisma.coffee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoffeeFindUniqueOrThrowArgs>(args: SelectSubset<T, CoffeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Coffee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoffeeFindFirstArgs} args - Arguments to find a Coffee
     * @example
     * // Get one Coffee
     * const coffee = await prisma.coffee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoffeeFindFirstArgs>(args?: SelectSubset<T, CoffeeFindFirstArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Coffee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoffeeFindFirstOrThrowArgs} args - Arguments to find a Coffee
     * @example
     * // Get one Coffee
     * const coffee = await prisma.coffee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoffeeFindFirstOrThrowArgs>(args?: SelectSubset<T, CoffeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Coffees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoffeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coffees
     * const coffees = await prisma.coffee.findMany()
     * 
     * // Get first 10 Coffees
     * const coffees = await prisma.coffee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coffeeWithIdOnly = await prisma.coffee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoffeeFindManyArgs>(args?: SelectSubset<T, CoffeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Coffee.
     * @param {CoffeeCreateArgs} args - Arguments to create a Coffee.
     * @example
     * // Create one Coffee
     * const Coffee = await prisma.coffee.create({
     *   data: {
     *     // ... data to create a Coffee
     *   }
     * })
     * 
     */
    create<T extends CoffeeCreateArgs>(args: SelectSubset<T, CoffeeCreateArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Coffees.
     * @param {CoffeeCreateManyArgs} args - Arguments to create many Coffees.
     * @example
     * // Create many Coffees
     * const coffee = await prisma.coffee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoffeeCreateManyArgs>(args?: SelectSubset<T, CoffeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coffees and returns the data saved in the database.
     * @param {CoffeeCreateManyAndReturnArgs} args - Arguments to create many Coffees.
     * @example
     * // Create many Coffees
     * const coffee = await prisma.coffee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coffees and only return the `id`
     * const coffeeWithIdOnly = await prisma.coffee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoffeeCreateManyAndReturnArgs>(args?: SelectSubset<T, CoffeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Coffee.
     * @param {CoffeeDeleteArgs} args - Arguments to delete one Coffee.
     * @example
     * // Delete one Coffee
     * const Coffee = await prisma.coffee.delete({
     *   where: {
     *     // ... filter to delete one Coffee
     *   }
     * })
     * 
     */
    delete<T extends CoffeeDeleteArgs>(args: SelectSubset<T, CoffeeDeleteArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Coffee.
     * @param {CoffeeUpdateArgs} args - Arguments to update one Coffee.
     * @example
     * // Update one Coffee
     * const coffee = await prisma.coffee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoffeeUpdateArgs>(args: SelectSubset<T, CoffeeUpdateArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Coffees.
     * @param {CoffeeDeleteManyArgs} args - Arguments to filter Coffees to delete.
     * @example
     * // Delete a few Coffees
     * const { count } = await prisma.coffee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoffeeDeleteManyArgs>(args?: SelectSubset<T, CoffeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coffees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoffeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coffees
     * const coffee = await prisma.coffee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoffeeUpdateManyArgs>(args: SelectSubset<T, CoffeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coffee.
     * @param {CoffeeUpsertArgs} args - Arguments to update or create a Coffee.
     * @example
     * // Update or create a Coffee
     * const coffee = await prisma.coffee.upsert({
     *   create: {
     *     // ... data to create a Coffee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coffee we want to update
     *   }
     * })
     */
    upsert<T extends CoffeeUpsertArgs>(args: SelectSubset<T, CoffeeUpsertArgs<ExtArgs>>): Prisma__CoffeeClient<$Result.GetResult<Prisma.$CoffeePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Coffees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoffeeCountArgs} args - Arguments to filter Coffees to count.
     * @example
     * // Count the number of Coffees
     * const count = await prisma.coffee.count({
     *   where: {
     *     // ... the filter for the Coffees we want to count
     *   }
     * })
    **/
    count<T extends CoffeeCountArgs>(
      args?: Subset<T, CoffeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoffeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coffee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoffeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoffeeAggregateArgs>(args: Subset<T, CoffeeAggregateArgs>): Prisma.PrismaPromise<GetCoffeeAggregateType<T>>

    /**
     * Group by Coffee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoffeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoffeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoffeeGroupByArgs['orderBy'] }
        : { orderBy?: CoffeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoffeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoffeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coffee model
   */
  readonly fields: CoffeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coffee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoffeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coffee model
   */ 
  interface CoffeeFieldRefs {
    readonly id: FieldRef<"Coffee", 'String'>
    readonly name: FieldRef<"Coffee", 'String'>
    readonly roaster: FieldRef<"Coffee", 'String'>
    readonly quantity: FieldRef<"Coffee", 'Int'>
    readonly quantityDescription: FieldRef<"Coffee", 'String'>
    readonly price: FieldRef<"Coffee", 'Decimal'>
    readonly rating: FieldRef<"Coffee", 'Decimal'>
    readonly currencyCode: FieldRef<"Coffee", 'String'>
    readonly reviews: FieldRef<"Coffee", 'Decimal'>
    readonly img: FieldRef<"Coffee", 'String'>
    readonly productUrl: FieldRef<"Coffee", 'String'>
    readonly sourceUrl: FieldRef<"Coffee", 'String'>
    readonly createdAt: FieldRef<"Coffee", 'DateTime'>
    readonly updatedAt: FieldRef<"Coffee", 'DateTime'>
    readonly brewMethod: FieldRef<"Coffee", 'String'>
    readonly tasteNotes: FieldRef<"Coffee", 'String'>
    readonly process: FieldRef<"Coffee", 'String'>
    readonly region: FieldRef<"Coffee", 'String'>
    readonly roastLevel: FieldRef<"Coffee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Coffee findUnique
   */
  export type CoffeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * Filter, which Coffee to fetch.
     */
    where: CoffeeWhereUniqueInput
  }

  /**
   * Coffee findUniqueOrThrow
   */
  export type CoffeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * Filter, which Coffee to fetch.
     */
    where: CoffeeWhereUniqueInput
  }

  /**
   * Coffee findFirst
   */
  export type CoffeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * Filter, which Coffee to fetch.
     */
    where?: CoffeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coffees to fetch.
     */
    orderBy?: CoffeeOrderByWithRelationInput | CoffeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coffees.
     */
    cursor?: CoffeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coffees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coffees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coffees.
     */
    distinct?: CoffeeScalarFieldEnum | CoffeeScalarFieldEnum[]
  }

  /**
   * Coffee findFirstOrThrow
   */
  export type CoffeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * Filter, which Coffee to fetch.
     */
    where?: CoffeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coffees to fetch.
     */
    orderBy?: CoffeeOrderByWithRelationInput | CoffeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coffees.
     */
    cursor?: CoffeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coffees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coffees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coffees.
     */
    distinct?: CoffeeScalarFieldEnum | CoffeeScalarFieldEnum[]
  }

  /**
   * Coffee findMany
   */
  export type CoffeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * Filter, which Coffees to fetch.
     */
    where?: CoffeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coffees to fetch.
     */
    orderBy?: CoffeeOrderByWithRelationInput | CoffeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coffees.
     */
    cursor?: CoffeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coffees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coffees.
     */
    skip?: number
    distinct?: CoffeeScalarFieldEnum | CoffeeScalarFieldEnum[]
  }

  /**
   * Coffee create
   */
  export type CoffeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * The data needed to create a Coffee.
     */
    data: XOR<CoffeeCreateInput, CoffeeUncheckedCreateInput>
  }

  /**
   * Coffee createMany
   */
  export type CoffeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coffees.
     */
    data: CoffeeCreateManyInput | CoffeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coffee createManyAndReturn
   */
  export type CoffeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * The data used to create many Coffees.
     */
    data: CoffeeCreateManyInput | CoffeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coffee update
   */
  export type CoffeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * The data needed to update a Coffee.
     */
    data: XOR<CoffeeUpdateInput, CoffeeUncheckedUpdateInput>
    /**
     * Choose, which Coffee to update.
     */
    where: CoffeeWhereUniqueInput
  }

  /**
   * Coffee updateMany
   */
  export type CoffeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coffees.
     */
    data: XOR<CoffeeUpdateManyMutationInput, CoffeeUncheckedUpdateManyInput>
    /**
     * Filter which Coffees to update
     */
    where?: CoffeeWhereInput
  }

  /**
   * Coffee upsert
   */
  export type CoffeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * The filter to search for the Coffee to update in case it exists.
     */
    where: CoffeeWhereUniqueInput
    /**
     * In case the Coffee found by the `where` argument doesn't exist, create a new Coffee with this data.
     */
    create: XOR<CoffeeCreateInput, CoffeeUncheckedCreateInput>
    /**
     * In case the Coffee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoffeeUpdateInput, CoffeeUncheckedUpdateInput>
  }

  /**
   * Coffee delete
   */
  export type CoffeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
    /**
     * Filter which Coffee to delete.
     */
    where: CoffeeWhereUniqueInput
  }

  /**
   * Coffee deleteMany
   */
  export type CoffeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coffees to delete
     */
    where?: CoffeeWhereInput
  }

  /**
   * Coffee without action
   */
  export type CoffeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coffee
     */
    select?: CoffeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coffee
     */
    omit?: CoffeeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CoffeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    roaster: 'roaster',
    quantity: 'quantity',
    quantityDescription: 'quantityDescription',
    price: 'price',
    rating: 'rating',
    currencyCode: 'currencyCode',
    reviews: 'reviews',
    img: 'img',
    productUrl: 'productUrl',
    sourceUrl: 'sourceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    brewMethod: 'brewMethod',
    tasteNotes: 'tasteNotes',
    process: 'process',
    region: 'region',
    roastLevel: 'roastLevel'
  };

  export type CoffeeScalarFieldEnum = (typeof CoffeeScalarFieldEnum)[keyof typeof CoffeeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CoffeeWhereInput = {
    AND?: CoffeeWhereInput | CoffeeWhereInput[]
    OR?: CoffeeWhereInput[]
    NOT?: CoffeeWhereInput | CoffeeWhereInput[]
    id?: StringFilter<"Coffee"> | string
    name?: StringFilter<"Coffee"> | string
    roaster?: StringFilter<"Coffee"> | string
    quantity?: IntFilter<"Coffee"> | number
    quantityDescription?: StringNullableFilter<"Coffee"> | string | null
    price?: DecimalFilter<"Coffee"> | Decimal | DecimalJsLike | number | string
    rating?: DecimalFilter<"Coffee"> | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFilter<"Coffee"> | string
    reviews?: DecimalNullableFilter<"Coffee"> | Decimal | DecimalJsLike | number | string | null
    img?: StringFilter<"Coffee"> | string
    productUrl?: StringFilter<"Coffee"> | string
    sourceUrl?: StringFilter<"Coffee"> | string
    createdAt?: DateTimeFilter<"Coffee"> | Date | string
    updatedAt?: DateTimeFilter<"Coffee"> | Date | string
    brewMethod?: StringNullableFilter<"Coffee"> | string | null
    tasteNotes?: StringNullableFilter<"Coffee"> | string | null
    process?: StringNullableFilter<"Coffee"> | string | null
    region?: StringNullableFilter<"Coffee"> | string | null
    roastLevel?: StringNullableFilter<"Coffee"> | string | null
  }

  export type CoffeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    roaster?: SortOrder
    quantity?: SortOrder
    quantityDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    rating?: SortOrder
    currencyCode?: SortOrder
    reviews?: SortOrderInput | SortOrder
    img?: SortOrder
    productUrl?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brewMethod?: SortOrderInput | SortOrder
    tasteNotes?: SortOrderInput | SortOrder
    process?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    roastLevel?: SortOrderInput | SortOrder
  }

  export type CoffeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uix_name_roaster_product_url?: CoffeeUix_name_roaster_product_urlCompoundUniqueInput
    AND?: CoffeeWhereInput | CoffeeWhereInput[]
    OR?: CoffeeWhereInput[]
    NOT?: CoffeeWhereInput | CoffeeWhereInput[]
    name?: StringFilter<"Coffee"> | string
    roaster?: StringFilter<"Coffee"> | string
    quantity?: IntFilter<"Coffee"> | number
    quantityDescription?: StringNullableFilter<"Coffee"> | string | null
    price?: DecimalFilter<"Coffee"> | Decimal | DecimalJsLike | number | string
    rating?: DecimalFilter<"Coffee"> | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFilter<"Coffee"> | string
    reviews?: DecimalNullableFilter<"Coffee"> | Decimal | DecimalJsLike | number | string | null
    img?: StringFilter<"Coffee"> | string
    productUrl?: StringFilter<"Coffee"> | string
    sourceUrl?: StringFilter<"Coffee"> | string
    createdAt?: DateTimeFilter<"Coffee"> | Date | string
    updatedAt?: DateTimeFilter<"Coffee"> | Date | string
    brewMethod?: StringNullableFilter<"Coffee"> | string | null
    tasteNotes?: StringNullableFilter<"Coffee"> | string | null
    process?: StringNullableFilter<"Coffee"> | string | null
    region?: StringNullableFilter<"Coffee"> | string | null
    roastLevel?: StringNullableFilter<"Coffee"> | string | null
  }, "id" | "uix_name_roaster_product_url">

  export type CoffeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    roaster?: SortOrder
    quantity?: SortOrder
    quantityDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    rating?: SortOrder
    currencyCode?: SortOrder
    reviews?: SortOrderInput | SortOrder
    img?: SortOrder
    productUrl?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brewMethod?: SortOrderInput | SortOrder
    tasteNotes?: SortOrderInput | SortOrder
    process?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    roastLevel?: SortOrderInput | SortOrder
    _count?: CoffeeCountOrderByAggregateInput
    _avg?: CoffeeAvgOrderByAggregateInput
    _max?: CoffeeMaxOrderByAggregateInput
    _min?: CoffeeMinOrderByAggregateInput
    _sum?: CoffeeSumOrderByAggregateInput
  }

  export type CoffeeScalarWhereWithAggregatesInput = {
    AND?: CoffeeScalarWhereWithAggregatesInput | CoffeeScalarWhereWithAggregatesInput[]
    OR?: CoffeeScalarWhereWithAggregatesInput[]
    NOT?: CoffeeScalarWhereWithAggregatesInput | CoffeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coffee"> | string
    name?: StringWithAggregatesFilter<"Coffee"> | string
    roaster?: StringWithAggregatesFilter<"Coffee"> | string
    quantity?: IntWithAggregatesFilter<"Coffee"> | number
    quantityDescription?: StringNullableWithAggregatesFilter<"Coffee"> | string | null
    price?: DecimalWithAggregatesFilter<"Coffee"> | Decimal | DecimalJsLike | number | string
    rating?: DecimalWithAggregatesFilter<"Coffee"> | Decimal | DecimalJsLike | number | string
    currencyCode?: StringWithAggregatesFilter<"Coffee"> | string
    reviews?: DecimalNullableWithAggregatesFilter<"Coffee"> | Decimal | DecimalJsLike | number | string | null
    img?: StringWithAggregatesFilter<"Coffee"> | string
    productUrl?: StringWithAggregatesFilter<"Coffee"> | string
    sourceUrl?: StringWithAggregatesFilter<"Coffee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Coffee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coffee"> | Date | string
    brewMethod?: StringNullableWithAggregatesFilter<"Coffee"> | string | null
    tasteNotes?: StringNullableWithAggregatesFilter<"Coffee"> | string | null
    process?: StringNullableWithAggregatesFilter<"Coffee"> | string | null
    region?: StringNullableWithAggregatesFilter<"Coffee"> | string | null
    roastLevel?: StringNullableWithAggregatesFilter<"Coffee"> | string | null
  }

  export type CoffeeCreateInput = {
    id?: string
    name: string
    roaster: string
    quantity: number
    quantityDescription?: string | null
    price: Decimal | DecimalJsLike | number | string
    rating: Decimal | DecimalJsLike | number | string
    currencyCode: string
    reviews?: Decimal | DecimalJsLike | number | string | null
    img: string
    productUrl: string
    sourceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brewMethod?: string | null
    tasteNotes?: string | null
    process?: string | null
    region?: string | null
    roastLevel?: string | null
  }

  export type CoffeeUncheckedCreateInput = {
    id?: string
    name: string
    roaster: string
    quantity: number
    quantityDescription?: string | null
    price: Decimal | DecimalJsLike | number | string
    rating: Decimal | DecimalJsLike | number | string
    currencyCode: string
    reviews?: Decimal | DecimalJsLike | number | string | null
    img: string
    productUrl: string
    sourceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brewMethod?: string | null
    tasteNotes?: string | null
    process?: string | null
    region?: string | null
    roastLevel?: string | null
  }

  export type CoffeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roaster?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    reviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    tasteNotes?: NullableStringFieldUpdateOperationsInput | string | null
    process?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    roastLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoffeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roaster?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    reviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    tasteNotes?: NullableStringFieldUpdateOperationsInput | string | null
    process?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    roastLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoffeeCreateManyInput = {
    id?: string
    name: string
    roaster: string
    quantity: number
    quantityDescription?: string | null
    price: Decimal | DecimalJsLike | number | string
    rating: Decimal | DecimalJsLike | number | string
    currencyCode: string
    reviews?: Decimal | DecimalJsLike | number | string | null
    img: string
    productUrl: string
    sourceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brewMethod?: string | null
    tasteNotes?: string | null
    process?: string | null
    region?: string | null
    roastLevel?: string | null
  }

  export type CoffeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roaster?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    reviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    tasteNotes?: NullableStringFieldUpdateOperationsInput | string | null
    process?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    roastLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoffeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roaster?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    quantityDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    reviews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    img?: StringFieldUpdateOperationsInput | string
    productUrl?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brewMethod?: NullableStringFieldUpdateOperationsInput | string | null
    tasteNotes?: NullableStringFieldUpdateOperationsInput | string | null
    process?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    roastLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoffeeUix_name_roaster_product_urlCompoundUniqueInput = {
    name: string
    roaster: string
    productUrl: string
  }

  export type CoffeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roaster?: SortOrder
    quantity?: SortOrder
    quantityDescription?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    currencyCode?: SortOrder
    reviews?: SortOrder
    img?: SortOrder
    productUrl?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brewMethod?: SortOrder
    tasteNotes?: SortOrder
    process?: SortOrder
    region?: SortOrder
    roastLevel?: SortOrder
  }

  export type CoffeeAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
  }

  export type CoffeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roaster?: SortOrder
    quantity?: SortOrder
    quantityDescription?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    currencyCode?: SortOrder
    reviews?: SortOrder
    img?: SortOrder
    productUrl?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brewMethod?: SortOrder
    tasteNotes?: SortOrder
    process?: SortOrder
    region?: SortOrder
    roastLevel?: SortOrder
  }

  export type CoffeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roaster?: SortOrder
    quantity?: SortOrder
    quantityDescription?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    currencyCode?: SortOrder
    reviews?: SortOrder
    img?: SortOrder
    productUrl?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brewMethod?: SortOrder
    tasteNotes?: SortOrder
    process?: SortOrder
    region?: SortOrder
    roastLevel?: SortOrder
  }

  export type CoffeeSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CoffeeDefaultArgs instead
     */
    export type CoffeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoffeeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}