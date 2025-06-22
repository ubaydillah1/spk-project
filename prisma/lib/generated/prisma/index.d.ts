
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Criteria
 * 
 */
export type Criteria = $Result.DefaultSelection<Prisma.$CriteriaPayload>
/**
 * Model Alternative
 * 
 */
export type Alternative = $Result.DefaultSelection<Prisma.$AlternativePayload>
/**
 * Model AlternativeCriteriaValue
 * 
 */
export type AlternativeCriteriaValue = $Result.DefaultSelection<Prisma.$AlternativeCriteriaValuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CriterionType: {
  BENEFIT: 'BENEFIT',
  COST: 'COST'
};

export type CriterionType = (typeof CriterionType)[keyof typeof CriterionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CriterionType = $Enums.CriterionType

export const CriterionType: typeof $Enums.CriterionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.criteria`: Exposes CRUD operations for the **Criteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criteria
    * const criteria = await prisma.criteria.findMany()
    * ```
    */
  get criteria(): Prisma.CriteriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternative`: Exposes CRUD operations for the **Alternative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alternatives
    * const alternatives = await prisma.alternative.findMany()
    * ```
    */
  get alternative(): Prisma.AlternativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternativeCriteriaValue`: Exposes CRUD operations for the **AlternativeCriteriaValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlternativeCriteriaValues
    * const alternativeCriteriaValues = await prisma.alternativeCriteriaValue.findMany()
    * ```
    */
  get alternativeCriteriaValue(): Prisma.AlternativeCriteriaValueDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Criteria: 'Criteria',
    Alternative: 'Alternative',
    AlternativeCriteriaValue: 'AlternativeCriteriaValue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "criteria" | "alternative" | "alternativeCriteriaValue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Criteria: {
        payload: Prisma.$CriteriaPayload<ExtArgs>
        fields: Prisma.CriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          findFirst: {
            args: Prisma.CriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          findMany: {
            args: Prisma.CriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>[]
          }
          create: {
            args: Prisma.CriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          createMany: {
            args: Prisma.CriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CriteriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>[]
          }
          delete: {
            args: Prisma.CriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          update: {
            args: Prisma.CriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          deleteMany: {
            args: Prisma.CriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CriteriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>[]
          }
          upsert: {
            args: Prisma.CriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          aggregate: {
            args: Prisma.CriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCriteria>
          }
          groupBy: {
            args: Prisma.CriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<CriteriaCountAggregateOutputType> | number
          }
        }
      }
      Alternative: {
        payload: Prisma.$AlternativePayload<ExtArgs>
        fields: Prisma.AlternativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findFirst: {
            args: Prisma.AlternativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findMany: {
            args: Prisma.AlternativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          create: {
            args: Prisma.AlternativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          createMany: {
            args: Prisma.AlternativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlternativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          delete: {
            args: Prisma.AlternativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          update: {
            args: Prisma.AlternativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          deleteMany: {
            args: Prisma.AlternativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlternativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          upsert: {
            args: Prisma.AlternativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          aggregate: {
            args: Prisma.AlternativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternative>
          }
          groupBy: {
            args: Prisma.AlternativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlternativeCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativeCountAggregateOutputType> | number
          }
        }
      }
      AlternativeCriteriaValue: {
        payload: Prisma.$AlternativeCriteriaValuePayload<ExtArgs>
        fields: Prisma.AlternativeCriteriaValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativeCriteriaValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativeCriteriaValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>
          }
          findFirst: {
            args: Prisma.AlternativeCriteriaValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativeCriteriaValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>
          }
          findMany: {
            args: Prisma.AlternativeCriteriaValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>[]
          }
          create: {
            args: Prisma.AlternativeCriteriaValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>
          }
          createMany: {
            args: Prisma.AlternativeCriteriaValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlternativeCriteriaValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>[]
          }
          delete: {
            args: Prisma.AlternativeCriteriaValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>
          }
          update: {
            args: Prisma.AlternativeCriteriaValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>
          }
          deleteMany: {
            args: Prisma.AlternativeCriteriaValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativeCriteriaValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlternativeCriteriaValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>[]
          }
          upsert: {
            args: Prisma.AlternativeCriteriaValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativeCriteriaValuePayload>
          }
          aggregate: {
            args: Prisma.AlternativeCriteriaValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternativeCriteriaValue>
          }
          groupBy: {
            args: Prisma.AlternativeCriteriaValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativeCriteriaValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlternativeCriteriaValueCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativeCriteriaValueCountAggregateOutputType> | number
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
    user?: UserOmit
    criteria?: CriteriaOmit
    alternative?: AlternativeOmit
    alternativeCriteriaValue?: AlternativeCriteriaValueOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cars: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | UserCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
  }


  /**
   * Count Type CriteriaCountOutputType
   */

  export type CriteriaCountOutputType = {
    AlternativeCriteriaValue: number
  }

  export type CriteriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AlternativeCriteriaValue?: boolean | CriteriaCountOutputTypeCountAlternativeCriteriaValueArgs
  }

  // Custom InputTypes
  /**
   * CriteriaCountOutputType without action
   */
  export type CriteriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CriteriaCountOutputType
     */
    select?: CriteriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CriteriaCountOutputType without action
   */
  export type CriteriaCountOutputTypeCountAlternativeCriteriaValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeCriteriaValueWhereInput
  }


  /**
   * Count Type AlternativeCountOutputType
   */

  export type AlternativeCountOutputType = {
    values: number
  }

  export type AlternativeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | AlternativeCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCountOutputType
     */
    select?: AlternativeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeCriteriaValueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    cars?: boolean | User$carsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | User$carsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cars: Prisma.$AlternativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends User$carsArgs<ExtArgs> = {}>(args?: Subset<T, User$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cars
   */
  export type User$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    cursor?: AlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Criteria
   */

  export type AggregateCriteria = {
    _count: CriteriaCountAggregateOutputType | null
    _avg: CriteriaAvgAggregateOutputType | null
    _sum: CriteriaSumAggregateOutputType | null
    _min: CriteriaMinAggregateOutputType | null
    _max: CriteriaMaxAggregateOutputType | null
  }

  export type CriteriaAvgAggregateOutputType = {
    weight: number | null
  }

  export type CriteriaSumAggregateOutputType = {
    weight: number | null
  }

  export type CriteriaMinAggregateOutputType = {
    id: string | null
    criteria_name: string | null
    weight: number | null
    criterion_type: $Enums.CriterionType | null
  }

  export type CriteriaMaxAggregateOutputType = {
    id: string | null
    criteria_name: string | null
    weight: number | null
    criterion_type: $Enums.CriterionType | null
  }

  export type CriteriaCountAggregateOutputType = {
    id: number
    criteria_name: number
    weight: number
    criterion_type: number
    _all: number
  }


  export type CriteriaAvgAggregateInputType = {
    weight?: true
  }

  export type CriteriaSumAggregateInputType = {
    weight?: true
  }

  export type CriteriaMinAggregateInputType = {
    id?: true
    criteria_name?: true
    weight?: true
    criterion_type?: true
  }

  export type CriteriaMaxAggregateInputType = {
    id?: true
    criteria_name?: true
    weight?: true
    criterion_type?: true
  }

  export type CriteriaCountAggregateInputType = {
    id?: true
    criteria_name?: true
    weight?: true
    criterion_type?: true
    _all?: true
  }

  export type CriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criteria to aggregate.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Criteria
    **/
    _count?: true | CriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CriteriaMaxAggregateInputType
  }

  export type GetCriteriaAggregateType<T extends CriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCriteria[P]>
      : GetScalarType<T[P], AggregateCriteria[P]>
  }




  export type CriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriteriaWhereInput
    orderBy?: CriteriaOrderByWithAggregationInput | CriteriaOrderByWithAggregationInput[]
    by: CriteriaScalarFieldEnum[] | CriteriaScalarFieldEnum
    having?: CriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CriteriaCountAggregateInputType | true
    _avg?: CriteriaAvgAggregateInputType
    _sum?: CriteriaSumAggregateInputType
    _min?: CriteriaMinAggregateInputType
    _max?: CriteriaMaxAggregateInputType
  }

  export type CriteriaGroupByOutputType = {
    id: string
    criteria_name: string
    weight: number
    criterion_type: $Enums.CriterionType
    _count: CriteriaCountAggregateOutputType | null
    _avg: CriteriaAvgAggregateOutputType | null
    _sum: CriteriaSumAggregateOutputType | null
    _min: CriteriaMinAggregateOutputType | null
    _max: CriteriaMaxAggregateOutputType | null
  }

  type GetCriteriaGroupByPayload<T extends CriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], CriteriaGroupByOutputType[P]>
        }
      >
    >


  export type CriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criteria_name?: boolean
    weight?: boolean
    criterion_type?: boolean
    AlternativeCriteriaValue?: boolean | Criteria$AlternativeCriteriaValueArgs<ExtArgs>
    _count?: boolean | CriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criteria"]>

  export type CriteriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criteria_name?: boolean
    weight?: boolean
    criterion_type?: boolean
  }, ExtArgs["result"]["criteria"]>

  export type CriteriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criteria_name?: boolean
    weight?: boolean
    criterion_type?: boolean
  }, ExtArgs["result"]["criteria"]>

  export type CriteriaSelectScalar = {
    id?: boolean
    criteria_name?: boolean
    weight?: boolean
    criterion_type?: boolean
  }

  export type CriteriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "criteria_name" | "weight" | "criterion_type", ExtArgs["result"]["criteria"]>
  export type CriteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AlternativeCriteriaValue?: boolean | Criteria$AlternativeCriteriaValueArgs<ExtArgs>
    _count?: boolean | CriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CriteriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CriteriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Criteria"
    objects: {
      AlternativeCriteriaValue: Prisma.$AlternativeCriteriaValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      criteria_name: string
      weight: number
      criterion_type: $Enums.CriterionType
    }, ExtArgs["result"]["criteria"]>
    composites: {}
  }

  type CriteriaGetPayload<S extends boolean | null | undefined | CriteriaDefaultArgs> = $Result.GetResult<Prisma.$CriteriaPayload, S>

  type CriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CriteriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CriteriaCountAggregateInputType | true
    }

  export interface CriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Criteria'], meta: { name: 'Criteria' } }
    /**
     * Find zero or one Criteria that matches the filter.
     * @param {CriteriaFindUniqueArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CriteriaFindUniqueArgs>(args: SelectSubset<T, CriteriaFindUniqueArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Criteria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CriteriaFindUniqueOrThrowArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaFindFirstArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CriteriaFindFirstArgs>(args?: SelectSubset<T, CriteriaFindFirstArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaFindFirstOrThrowArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criteria
     * const criteria = await prisma.criteria.findMany()
     * 
     * // Get first 10 Criteria
     * const criteria = await prisma.criteria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const criteriaWithIdOnly = await prisma.criteria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CriteriaFindManyArgs>(args?: SelectSubset<T, CriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Criteria.
     * @param {CriteriaCreateArgs} args - Arguments to create a Criteria.
     * @example
     * // Create one Criteria
     * const Criteria = await prisma.criteria.create({
     *   data: {
     *     // ... data to create a Criteria
     *   }
     * })
     * 
     */
    create<T extends CriteriaCreateArgs>(args: SelectSubset<T, CriteriaCreateArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criteria.
     * @param {CriteriaCreateManyArgs} args - Arguments to create many Criteria.
     * @example
     * // Create many Criteria
     * const criteria = await prisma.criteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CriteriaCreateManyArgs>(args?: SelectSubset<T, CriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Criteria and returns the data saved in the database.
     * @param {CriteriaCreateManyAndReturnArgs} args - Arguments to create many Criteria.
     * @example
     * // Create many Criteria
     * const criteria = await prisma.criteria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Criteria and only return the `id`
     * const criteriaWithIdOnly = await prisma.criteria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CriteriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CriteriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Criteria.
     * @param {CriteriaDeleteArgs} args - Arguments to delete one Criteria.
     * @example
     * // Delete one Criteria
     * const Criteria = await prisma.criteria.delete({
     *   where: {
     *     // ... filter to delete one Criteria
     *   }
     * })
     * 
     */
    delete<T extends CriteriaDeleteArgs>(args: SelectSubset<T, CriteriaDeleteArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Criteria.
     * @param {CriteriaUpdateArgs} args - Arguments to update one Criteria.
     * @example
     * // Update one Criteria
     * const criteria = await prisma.criteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CriteriaUpdateArgs>(args: SelectSubset<T, CriteriaUpdateArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criteria.
     * @param {CriteriaDeleteManyArgs} args - Arguments to filter Criteria to delete.
     * @example
     * // Delete a few Criteria
     * const { count } = await prisma.criteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CriteriaDeleteManyArgs>(args?: SelectSubset<T, CriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criteria
     * const criteria = await prisma.criteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CriteriaUpdateManyArgs>(args: SelectSubset<T, CriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criteria and returns the data updated in the database.
     * @param {CriteriaUpdateManyAndReturnArgs} args - Arguments to update many Criteria.
     * @example
     * // Update many Criteria
     * const criteria = await prisma.criteria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Criteria and only return the `id`
     * const criteriaWithIdOnly = await prisma.criteria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CriteriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CriteriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Criteria.
     * @param {CriteriaUpsertArgs} args - Arguments to update or create a Criteria.
     * @example
     * // Update or create a Criteria
     * const criteria = await prisma.criteria.upsert({
     *   create: {
     *     // ... data to create a Criteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Criteria we want to update
     *   }
     * })
     */
    upsert<T extends CriteriaUpsertArgs>(args: SelectSubset<T, CriteriaUpsertArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaCountArgs} args - Arguments to filter Criteria to count.
     * @example
     * // Count the number of Criteria
     * const count = await prisma.criteria.count({
     *   where: {
     *     // ... the filter for the Criteria we want to count
     *   }
     * })
    **/
    count<T extends CriteriaCountArgs>(
      args?: Subset<T, CriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CriteriaAggregateArgs>(args: Subset<T, CriteriaAggregateArgs>): Prisma.PrismaPromise<GetCriteriaAggregateType<T>>

    /**
     * Group by Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaGroupByArgs} args - Group by arguments.
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
      T extends CriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CriteriaGroupByArgs['orderBy'] }
        : { orderBy?: CriteriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Criteria model
   */
  readonly fields: CriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Criteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AlternativeCriteriaValue<T extends Criteria$AlternativeCriteriaValueArgs<ExtArgs> = {}>(args?: Subset<T, Criteria$AlternativeCriteriaValueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Criteria model
   */
  interface CriteriaFieldRefs {
    readonly id: FieldRef<"Criteria", 'String'>
    readonly criteria_name: FieldRef<"Criteria", 'String'>
    readonly weight: FieldRef<"Criteria", 'Float'>
    readonly criterion_type: FieldRef<"Criteria", 'CriterionType'>
  }
    

  // Custom InputTypes
  /**
   * Criteria findUnique
   */
  export type CriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria findUniqueOrThrow
   */
  export type CriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria findFirst
   */
  export type CriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criteria.
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criteria.
     */
    distinct?: CriteriaScalarFieldEnum | CriteriaScalarFieldEnum[]
  }

  /**
   * Criteria findFirstOrThrow
   */
  export type CriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criteria.
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criteria.
     */
    distinct?: CriteriaScalarFieldEnum | CriteriaScalarFieldEnum[]
  }

  /**
   * Criteria findMany
   */
  export type CriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Criteria.
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    distinct?: CriteriaScalarFieldEnum | CriteriaScalarFieldEnum[]
  }

  /**
   * Criteria create
   */
  export type CriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Criteria.
     */
    data: XOR<CriteriaCreateInput, CriteriaUncheckedCreateInput>
  }

  /**
   * Criteria createMany
   */
  export type CriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Criteria.
     */
    data: CriteriaCreateManyInput | CriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Criteria createManyAndReturn
   */
  export type CriteriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * The data used to create many Criteria.
     */
    data: CriteriaCreateManyInput | CriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Criteria update
   */
  export type CriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Criteria.
     */
    data: XOR<CriteriaUpdateInput, CriteriaUncheckedUpdateInput>
    /**
     * Choose, which Criteria to update.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria updateMany
   */
  export type CriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Criteria.
     */
    data: XOR<CriteriaUpdateManyMutationInput, CriteriaUncheckedUpdateManyInput>
    /**
     * Filter which Criteria to update
     */
    where?: CriteriaWhereInput
    /**
     * Limit how many Criteria to update.
     */
    limit?: number
  }

  /**
   * Criteria updateManyAndReturn
   */
  export type CriteriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * The data used to update Criteria.
     */
    data: XOR<CriteriaUpdateManyMutationInput, CriteriaUncheckedUpdateManyInput>
    /**
     * Filter which Criteria to update
     */
    where?: CriteriaWhereInput
    /**
     * Limit how many Criteria to update.
     */
    limit?: number
  }

  /**
   * Criteria upsert
   */
  export type CriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Criteria to update in case it exists.
     */
    where: CriteriaWhereUniqueInput
    /**
     * In case the Criteria found by the `where` argument doesn't exist, create a new Criteria with this data.
     */
    create: XOR<CriteriaCreateInput, CriteriaUncheckedCreateInput>
    /**
     * In case the Criteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CriteriaUpdateInput, CriteriaUncheckedUpdateInput>
  }

  /**
   * Criteria delete
   */
  export type CriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter which Criteria to delete.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria deleteMany
   */
  export type CriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criteria to delete
     */
    where?: CriteriaWhereInput
    /**
     * Limit how many Criteria to delete.
     */
    limit?: number
  }

  /**
   * Criteria.AlternativeCriteriaValue
   */
  export type Criteria$AlternativeCriteriaValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    where?: AlternativeCriteriaValueWhereInput
    orderBy?: AlternativeCriteriaValueOrderByWithRelationInput | AlternativeCriteriaValueOrderByWithRelationInput[]
    cursor?: AlternativeCriteriaValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativeCriteriaValueScalarFieldEnum | AlternativeCriteriaValueScalarFieldEnum[]
  }

  /**
   * Criteria without action
   */
  export type CriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
  }


  /**
   * Model Alternative
   */

  export type AggregateAlternative = {
    _count: AlternativeCountAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  export type AlternativeMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type AlternativeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type AlternativeCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type AlternativeMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type AlternativeMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type AlternativeCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type AlternativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternative to aggregate.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alternatives
    **/
    _count?: true | AlternativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativeMaxAggregateInputType
  }

  export type GetAlternativeAggregateType<T extends AlternativeAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternative[P]>
      : GetScalarType<T[P], AggregateAlternative[P]>
  }




  export type AlternativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithAggregationInput | AlternativeOrderByWithAggregationInput[]
    by: AlternativeScalarFieldEnum[] | AlternativeScalarFieldEnum
    having?: AlternativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativeCountAggregateInputType | true
    _min?: AlternativeMinAggregateInputType
    _max?: AlternativeMaxAggregateInputType
  }

  export type AlternativeGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: AlternativeCountAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  type GetAlternativeGroupByPayload<T extends AlternativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
        }
      >
    >


  export type AlternativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    values?: boolean | Alternative$valuesArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type AlternativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["alternative"]>
  export type AlternativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    values?: boolean | Alternative$valuesArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlternativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alternative"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      values: Prisma.$AlternativeCriteriaValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["alternative"]>
    composites: {}
  }

  type AlternativeGetPayload<S extends boolean | null | undefined | AlternativeDefaultArgs> = $Result.GetResult<Prisma.$AlternativePayload, S>

  type AlternativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativeCountAggregateInputType | true
    }

  export interface AlternativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alternative'], meta: { name: 'Alternative' } }
    /**
     * Find zero or one Alternative that matches the filter.
     * @param {AlternativeFindUniqueArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativeFindUniqueArgs>(args: SelectSubset<T, AlternativeFindUniqueArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alternative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativeFindUniqueOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativeFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativeFindFirstArgs>(args?: SelectSubset<T, AlternativeFindFirstArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativeFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alternatives
     * const alternatives = await prisma.alternative.findMany()
     * 
     * // Get first 10 Alternatives
     * const alternatives = await prisma.alternative.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativeWithIdOnly = await prisma.alternative.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativeFindManyArgs>(args?: SelectSubset<T, AlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alternative.
     * @param {AlternativeCreateArgs} args - Arguments to create a Alternative.
     * @example
     * // Create one Alternative
     * const Alternative = await prisma.alternative.create({
     *   data: {
     *     // ... data to create a Alternative
     *   }
     * })
     * 
     */
    create<T extends AlternativeCreateArgs>(args: SelectSubset<T, AlternativeCreateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alternatives.
     * @param {AlternativeCreateManyArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativeCreateManyArgs>(args?: SelectSubset<T, AlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alternatives and returns the data saved in the database.
     * @param {AlternativeCreateManyAndReturnArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlternativeCreateManyAndReturnArgs>(args?: SelectSubset<T, AlternativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alternative.
     * @param {AlternativeDeleteArgs} args - Arguments to delete one Alternative.
     * @example
     * // Delete one Alternative
     * const Alternative = await prisma.alternative.delete({
     *   where: {
     *     // ... filter to delete one Alternative
     *   }
     * })
     * 
     */
    delete<T extends AlternativeDeleteArgs>(args: SelectSubset<T, AlternativeDeleteArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alternative.
     * @param {AlternativeUpdateArgs} args - Arguments to update one Alternative.
     * @example
     * // Update one Alternative
     * const alternative = await prisma.alternative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativeUpdateArgs>(args: SelectSubset<T, AlternativeUpdateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alternatives.
     * @param {AlternativeDeleteManyArgs} args - Arguments to filter Alternatives to delete.
     * @example
     * // Delete a few Alternatives
     * const { count } = await prisma.alternative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativeDeleteManyArgs>(args?: SelectSubset<T, AlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativeUpdateManyArgs>(args: SelectSubset<T, AlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives and returns the data updated in the database.
     * @param {AlternativeUpdateManyAndReturnArgs} args - Arguments to update many Alternatives.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlternativeUpdateManyAndReturnArgs>(args: SelectSubset<T, AlternativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alternative.
     * @param {AlternativeUpsertArgs} args - Arguments to update or create a Alternative.
     * @example
     * // Update or create a Alternative
     * const alternative = await prisma.alternative.upsert({
     *   create: {
     *     // ... data to create a Alternative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alternative we want to update
     *   }
     * })
     */
    upsert<T extends AlternativeUpsertArgs>(args: SelectSubset<T, AlternativeUpsertArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCountArgs} args - Arguments to filter Alternatives to count.
     * @example
     * // Count the number of Alternatives
     * const count = await prisma.alternative.count({
     *   where: {
     *     // ... the filter for the Alternatives we want to count
     *   }
     * })
    **/
    count<T extends AlternativeCountArgs>(
      args?: Subset<T, AlternativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlternativeAggregateArgs>(args: Subset<T, AlternativeAggregateArgs>): Prisma.PrismaPromise<GetAlternativeAggregateType<T>>

    /**
     * Group by Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeGroupByArgs} args - Group by arguments.
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
      T extends AlternativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativeGroupByArgs['orderBy'] }
        : { orderBy?: AlternativeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alternative model
   */
  readonly fields: AlternativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alternative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends Alternative$valuesArgs<ExtArgs> = {}>(args?: Subset<T, Alternative$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alternative model
   */
  interface AlternativeFieldRefs {
    readonly id: FieldRef<"Alternative", 'String'>
    readonly name: FieldRef<"Alternative", 'String'>
    readonly userId: FieldRef<"Alternative", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alternative findUnique
   */
  export type AlternativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findUniqueOrThrow
   */
  export type AlternativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findFirst
   */
  export type AlternativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findFirstOrThrow
   */
  export type AlternativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findMany
   */
  export type AlternativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternatives to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative create
   */
  export type AlternativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to create a Alternative.
     */
    data: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
  }

  /**
   * Alternative createMany
   */
  export type AlternativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alternative createManyAndReturn
   */
  export type AlternativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative update
   */
  export type AlternativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to update a Alternative.
     */
    data: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
    /**
     * Choose, which Alternative to update.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative updateMany
   */
  export type AlternativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
  }

  /**
   * Alternative updateManyAndReturn
   */
  export type AlternativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative upsert
   */
  export type AlternativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The filter to search for the Alternative to update in case it exists.
     */
    where: AlternativeWhereUniqueInput
    /**
     * In case the Alternative found by the `where` argument doesn't exist, create a new Alternative with this data.
     */
    create: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
    /**
     * In case the Alternative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
  }

  /**
   * Alternative delete
   */
  export type AlternativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter which Alternative to delete.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative deleteMany
   */
  export type AlternativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternatives to delete
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to delete.
     */
    limit?: number
  }

  /**
   * Alternative.values
   */
  export type Alternative$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    where?: AlternativeCriteriaValueWhereInput
    orderBy?: AlternativeCriteriaValueOrderByWithRelationInput | AlternativeCriteriaValueOrderByWithRelationInput[]
    cursor?: AlternativeCriteriaValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativeCriteriaValueScalarFieldEnum | AlternativeCriteriaValueScalarFieldEnum[]
  }

  /**
   * Alternative without action
   */
  export type AlternativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
  }


  /**
   * Model AlternativeCriteriaValue
   */

  export type AggregateAlternativeCriteriaValue = {
    _count: AlternativeCriteriaValueCountAggregateOutputType | null
    _min: AlternativeCriteriaValueMinAggregateOutputType | null
    _max: AlternativeCriteriaValueMaxAggregateOutputType | null
  }

  export type AlternativeCriteriaValueMinAggregateOutputType = {
    id: string | null
    alternativeId: string | null
    criteriaId: string | null
    value: string | null
  }

  export type AlternativeCriteriaValueMaxAggregateOutputType = {
    id: string | null
    alternativeId: string | null
    criteriaId: string | null
    value: string | null
  }

  export type AlternativeCriteriaValueCountAggregateOutputType = {
    id: number
    alternativeId: number
    criteriaId: number
    value: number
    _all: number
  }


  export type AlternativeCriteriaValueMinAggregateInputType = {
    id?: true
    alternativeId?: true
    criteriaId?: true
    value?: true
  }

  export type AlternativeCriteriaValueMaxAggregateInputType = {
    id?: true
    alternativeId?: true
    criteriaId?: true
    value?: true
  }

  export type AlternativeCriteriaValueCountAggregateInputType = {
    id?: true
    alternativeId?: true
    criteriaId?: true
    value?: true
    _all?: true
  }

  export type AlternativeCriteriaValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlternativeCriteriaValue to aggregate.
     */
    where?: AlternativeCriteriaValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlternativeCriteriaValues to fetch.
     */
    orderBy?: AlternativeCriteriaValueOrderByWithRelationInput | AlternativeCriteriaValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativeCriteriaValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlternativeCriteriaValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlternativeCriteriaValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlternativeCriteriaValues
    **/
    _count?: true | AlternativeCriteriaValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativeCriteriaValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativeCriteriaValueMaxAggregateInputType
  }

  export type GetAlternativeCriteriaValueAggregateType<T extends AlternativeCriteriaValueAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternativeCriteriaValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternativeCriteriaValue[P]>
      : GetScalarType<T[P], AggregateAlternativeCriteriaValue[P]>
  }




  export type AlternativeCriteriaValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeCriteriaValueWhereInput
    orderBy?: AlternativeCriteriaValueOrderByWithAggregationInput | AlternativeCriteriaValueOrderByWithAggregationInput[]
    by: AlternativeCriteriaValueScalarFieldEnum[] | AlternativeCriteriaValueScalarFieldEnum
    having?: AlternativeCriteriaValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativeCriteriaValueCountAggregateInputType | true
    _min?: AlternativeCriteriaValueMinAggregateInputType
    _max?: AlternativeCriteriaValueMaxAggregateInputType
  }

  export type AlternativeCriteriaValueGroupByOutputType = {
    id: string
    alternativeId: string
    criteriaId: string
    value: string
    _count: AlternativeCriteriaValueCountAggregateOutputType | null
    _min: AlternativeCriteriaValueMinAggregateOutputType | null
    _max: AlternativeCriteriaValueMaxAggregateOutputType | null
  }

  type GetAlternativeCriteriaValueGroupByPayload<T extends AlternativeCriteriaValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativeCriteriaValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativeCriteriaValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativeCriteriaValueGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativeCriteriaValueGroupByOutputType[P]>
        }
      >
    >


  export type AlternativeCriteriaValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternativeCriteriaValue"]>

  export type AlternativeCriteriaValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternativeCriteriaValue"]>

  export type AlternativeCriteriaValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternativeCriteriaValue"]>

  export type AlternativeCriteriaValueSelectScalar = {
    id?: boolean
    alternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
  }

  export type AlternativeCriteriaValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alternativeId" | "criteriaId" | "value", ExtArgs["result"]["alternativeCriteriaValue"]>
  export type AlternativeCriteriaValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }
  export type AlternativeCriteriaValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }
  export type AlternativeCriteriaValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }

  export type $AlternativeCriteriaValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlternativeCriteriaValue"
    objects: {
      alternative: Prisma.$AlternativePayload<ExtArgs>
      criteria: Prisma.$CriteriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alternativeId: string
      criteriaId: string
      value: string
    }, ExtArgs["result"]["alternativeCriteriaValue"]>
    composites: {}
  }

  type AlternativeCriteriaValueGetPayload<S extends boolean | null | undefined | AlternativeCriteriaValueDefaultArgs> = $Result.GetResult<Prisma.$AlternativeCriteriaValuePayload, S>

  type AlternativeCriteriaValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativeCriteriaValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativeCriteriaValueCountAggregateInputType | true
    }

  export interface AlternativeCriteriaValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlternativeCriteriaValue'], meta: { name: 'AlternativeCriteriaValue' } }
    /**
     * Find zero or one AlternativeCriteriaValue that matches the filter.
     * @param {AlternativeCriteriaValueFindUniqueArgs} args - Arguments to find a AlternativeCriteriaValue
     * @example
     * // Get one AlternativeCriteriaValue
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativeCriteriaValueFindUniqueArgs>(args: SelectSubset<T, AlternativeCriteriaValueFindUniqueArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlternativeCriteriaValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativeCriteriaValueFindUniqueOrThrowArgs} args - Arguments to find a AlternativeCriteriaValue
     * @example
     * // Get one AlternativeCriteriaValue
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativeCriteriaValueFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativeCriteriaValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlternativeCriteriaValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCriteriaValueFindFirstArgs} args - Arguments to find a AlternativeCriteriaValue
     * @example
     * // Get one AlternativeCriteriaValue
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativeCriteriaValueFindFirstArgs>(args?: SelectSubset<T, AlternativeCriteriaValueFindFirstArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlternativeCriteriaValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCriteriaValueFindFirstOrThrowArgs} args - Arguments to find a AlternativeCriteriaValue
     * @example
     * // Get one AlternativeCriteriaValue
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativeCriteriaValueFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativeCriteriaValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlternativeCriteriaValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCriteriaValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlternativeCriteriaValues
     * const alternativeCriteriaValues = await prisma.alternativeCriteriaValue.findMany()
     * 
     * // Get first 10 AlternativeCriteriaValues
     * const alternativeCriteriaValues = await prisma.alternativeCriteriaValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativeCriteriaValueWithIdOnly = await prisma.alternativeCriteriaValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativeCriteriaValueFindManyArgs>(args?: SelectSubset<T, AlternativeCriteriaValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlternativeCriteriaValue.
     * @param {AlternativeCriteriaValueCreateArgs} args - Arguments to create a AlternativeCriteriaValue.
     * @example
     * // Create one AlternativeCriteriaValue
     * const AlternativeCriteriaValue = await prisma.alternativeCriteriaValue.create({
     *   data: {
     *     // ... data to create a AlternativeCriteriaValue
     *   }
     * })
     * 
     */
    create<T extends AlternativeCriteriaValueCreateArgs>(args: SelectSubset<T, AlternativeCriteriaValueCreateArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlternativeCriteriaValues.
     * @param {AlternativeCriteriaValueCreateManyArgs} args - Arguments to create many AlternativeCriteriaValues.
     * @example
     * // Create many AlternativeCriteriaValues
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativeCriteriaValueCreateManyArgs>(args?: SelectSubset<T, AlternativeCriteriaValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlternativeCriteriaValues and returns the data saved in the database.
     * @param {AlternativeCriteriaValueCreateManyAndReturnArgs} args - Arguments to create many AlternativeCriteriaValues.
     * @example
     * // Create many AlternativeCriteriaValues
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlternativeCriteriaValues and only return the `id`
     * const alternativeCriteriaValueWithIdOnly = await prisma.alternativeCriteriaValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlternativeCriteriaValueCreateManyAndReturnArgs>(args?: SelectSubset<T, AlternativeCriteriaValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlternativeCriteriaValue.
     * @param {AlternativeCriteriaValueDeleteArgs} args - Arguments to delete one AlternativeCriteriaValue.
     * @example
     * // Delete one AlternativeCriteriaValue
     * const AlternativeCriteriaValue = await prisma.alternativeCriteriaValue.delete({
     *   where: {
     *     // ... filter to delete one AlternativeCriteriaValue
     *   }
     * })
     * 
     */
    delete<T extends AlternativeCriteriaValueDeleteArgs>(args: SelectSubset<T, AlternativeCriteriaValueDeleteArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlternativeCriteriaValue.
     * @param {AlternativeCriteriaValueUpdateArgs} args - Arguments to update one AlternativeCriteriaValue.
     * @example
     * // Update one AlternativeCriteriaValue
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativeCriteriaValueUpdateArgs>(args: SelectSubset<T, AlternativeCriteriaValueUpdateArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlternativeCriteriaValues.
     * @param {AlternativeCriteriaValueDeleteManyArgs} args - Arguments to filter AlternativeCriteriaValues to delete.
     * @example
     * // Delete a few AlternativeCriteriaValues
     * const { count } = await prisma.alternativeCriteriaValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativeCriteriaValueDeleteManyArgs>(args?: SelectSubset<T, AlternativeCriteriaValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlternativeCriteriaValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCriteriaValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlternativeCriteriaValues
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativeCriteriaValueUpdateManyArgs>(args: SelectSubset<T, AlternativeCriteriaValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlternativeCriteriaValues and returns the data updated in the database.
     * @param {AlternativeCriteriaValueUpdateManyAndReturnArgs} args - Arguments to update many AlternativeCriteriaValues.
     * @example
     * // Update many AlternativeCriteriaValues
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlternativeCriteriaValues and only return the `id`
     * const alternativeCriteriaValueWithIdOnly = await prisma.alternativeCriteriaValue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlternativeCriteriaValueUpdateManyAndReturnArgs>(args: SelectSubset<T, AlternativeCriteriaValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlternativeCriteriaValue.
     * @param {AlternativeCriteriaValueUpsertArgs} args - Arguments to update or create a AlternativeCriteriaValue.
     * @example
     * // Update or create a AlternativeCriteriaValue
     * const alternativeCriteriaValue = await prisma.alternativeCriteriaValue.upsert({
     *   create: {
     *     // ... data to create a AlternativeCriteriaValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlternativeCriteriaValue we want to update
     *   }
     * })
     */
    upsert<T extends AlternativeCriteriaValueUpsertArgs>(args: SelectSubset<T, AlternativeCriteriaValueUpsertArgs<ExtArgs>>): Prisma__AlternativeCriteriaValueClient<$Result.GetResult<Prisma.$AlternativeCriteriaValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlternativeCriteriaValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCriteriaValueCountArgs} args - Arguments to filter AlternativeCriteriaValues to count.
     * @example
     * // Count the number of AlternativeCriteriaValues
     * const count = await prisma.alternativeCriteriaValue.count({
     *   where: {
     *     // ... the filter for the AlternativeCriteriaValues we want to count
     *   }
     * })
    **/
    count<T extends AlternativeCriteriaValueCountArgs>(
      args?: Subset<T, AlternativeCriteriaValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativeCriteriaValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlternativeCriteriaValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCriteriaValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlternativeCriteriaValueAggregateArgs>(args: Subset<T, AlternativeCriteriaValueAggregateArgs>): Prisma.PrismaPromise<GetAlternativeCriteriaValueAggregateType<T>>

    /**
     * Group by AlternativeCriteriaValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCriteriaValueGroupByArgs} args - Group by arguments.
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
      T extends AlternativeCriteriaValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativeCriteriaValueGroupByArgs['orderBy'] }
        : { orderBy?: AlternativeCriteriaValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlternativeCriteriaValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativeCriteriaValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlternativeCriteriaValue model
   */
  readonly fields: AlternativeCriteriaValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlternativeCriteriaValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativeCriteriaValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alternative<T extends AlternativeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlternativeDefaultArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    criteria<T extends CriteriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CriteriaDefaultArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlternativeCriteriaValue model
   */
  interface AlternativeCriteriaValueFieldRefs {
    readonly id: FieldRef<"AlternativeCriteriaValue", 'String'>
    readonly alternativeId: FieldRef<"AlternativeCriteriaValue", 'String'>
    readonly criteriaId: FieldRef<"AlternativeCriteriaValue", 'String'>
    readonly value: FieldRef<"AlternativeCriteriaValue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlternativeCriteriaValue findUnique
   */
  export type AlternativeCriteriaValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * Filter, which AlternativeCriteriaValue to fetch.
     */
    where: AlternativeCriteriaValueWhereUniqueInput
  }

  /**
   * AlternativeCriteriaValue findUniqueOrThrow
   */
  export type AlternativeCriteriaValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * Filter, which AlternativeCriteriaValue to fetch.
     */
    where: AlternativeCriteriaValueWhereUniqueInput
  }

  /**
   * AlternativeCriteriaValue findFirst
   */
  export type AlternativeCriteriaValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * Filter, which AlternativeCriteriaValue to fetch.
     */
    where?: AlternativeCriteriaValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlternativeCriteriaValues to fetch.
     */
    orderBy?: AlternativeCriteriaValueOrderByWithRelationInput | AlternativeCriteriaValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlternativeCriteriaValues.
     */
    cursor?: AlternativeCriteriaValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlternativeCriteriaValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlternativeCriteriaValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlternativeCriteriaValues.
     */
    distinct?: AlternativeCriteriaValueScalarFieldEnum | AlternativeCriteriaValueScalarFieldEnum[]
  }

  /**
   * AlternativeCriteriaValue findFirstOrThrow
   */
  export type AlternativeCriteriaValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * Filter, which AlternativeCriteriaValue to fetch.
     */
    where?: AlternativeCriteriaValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlternativeCriteriaValues to fetch.
     */
    orderBy?: AlternativeCriteriaValueOrderByWithRelationInput | AlternativeCriteriaValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlternativeCriteriaValues.
     */
    cursor?: AlternativeCriteriaValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlternativeCriteriaValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlternativeCriteriaValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlternativeCriteriaValues.
     */
    distinct?: AlternativeCriteriaValueScalarFieldEnum | AlternativeCriteriaValueScalarFieldEnum[]
  }

  /**
   * AlternativeCriteriaValue findMany
   */
  export type AlternativeCriteriaValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * Filter, which AlternativeCriteriaValues to fetch.
     */
    where?: AlternativeCriteriaValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlternativeCriteriaValues to fetch.
     */
    orderBy?: AlternativeCriteriaValueOrderByWithRelationInput | AlternativeCriteriaValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlternativeCriteriaValues.
     */
    cursor?: AlternativeCriteriaValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlternativeCriteriaValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlternativeCriteriaValues.
     */
    skip?: number
    distinct?: AlternativeCriteriaValueScalarFieldEnum | AlternativeCriteriaValueScalarFieldEnum[]
  }

  /**
   * AlternativeCriteriaValue create
   */
  export type AlternativeCriteriaValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * The data needed to create a AlternativeCriteriaValue.
     */
    data: XOR<AlternativeCriteriaValueCreateInput, AlternativeCriteriaValueUncheckedCreateInput>
  }

  /**
   * AlternativeCriteriaValue createMany
   */
  export type AlternativeCriteriaValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlternativeCriteriaValues.
     */
    data: AlternativeCriteriaValueCreateManyInput | AlternativeCriteriaValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlternativeCriteriaValue createManyAndReturn
   */
  export type AlternativeCriteriaValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * The data used to create many AlternativeCriteriaValues.
     */
    data: AlternativeCriteriaValueCreateManyInput | AlternativeCriteriaValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlternativeCriteriaValue update
   */
  export type AlternativeCriteriaValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * The data needed to update a AlternativeCriteriaValue.
     */
    data: XOR<AlternativeCriteriaValueUpdateInput, AlternativeCriteriaValueUncheckedUpdateInput>
    /**
     * Choose, which AlternativeCriteriaValue to update.
     */
    where: AlternativeCriteriaValueWhereUniqueInput
  }

  /**
   * AlternativeCriteriaValue updateMany
   */
  export type AlternativeCriteriaValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlternativeCriteriaValues.
     */
    data: XOR<AlternativeCriteriaValueUpdateManyMutationInput, AlternativeCriteriaValueUncheckedUpdateManyInput>
    /**
     * Filter which AlternativeCriteriaValues to update
     */
    where?: AlternativeCriteriaValueWhereInput
    /**
     * Limit how many AlternativeCriteriaValues to update.
     */
    limit?: number
  }

  /**
   * AlternativeCriteriaValue updateManyAndReturn
   */
  export type AlternativeCriteriaValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * The data used to update AlternativeCriteriaValues.
     */
    data: XOR<AlternativeCriteriaValueUpdateManyMutationInput, AlternativeCriteriaValueUncheckedUpdateManyInput>
    /**
     * Filter which AlternativeCriteriaValues to update
     */
    where?: AlternativeCriteriaValueWhereInput
    /**
     * Limit how many AlternativeCriteriaValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlternativeCriteriaValue upsert
   */
  export type AlternativeCriteriaValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * The filter to search for the AlternativeCriteriaValue to update in case it exists.
     */
    where: AlternativeCriteriaValueWhereUniqueInput
    /**
     * In case the AlternativeCriteriaValue found by the `where` argument doesn't exist, create a new AlternativeCriteriaValue with this data.
     */
    create: XOR<AlternativeCriteriaValueCreateInput, AlternativeCriteriaValueUncheckedCreateInput>
    /**
     * In case the AlternativeCriteriaValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativeCriteriaValueUpdateInput, AlternativeCriteriaValueUncheckedUpdateInput>
  }

  /**
   * AlternativeCriteriaValue delete
   */
  export type AlternativeCriteriaValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
    /**
     * Filter which AlternativeCriteriaValue to delete.
     */
    where: AlternativeCriteriaValueWhereUniqueInput
  }

  /**
   * AlternativeCriteriaValue deleteMany
   */
  export type AlternativeCriteriaValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlternativeCriteriaValues to delete
     */
    where?: AlternativeCriteriaValueWhereInput
    /**
     * Limit how many AlternativeCriteriaValues to delete.
     */
    limit?: number
  }

  /**
   * AlternativeCriteriaValue without action
   */
  export type AlternativeCriteriaValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCriteriaValue
     */
    select?: AlternativeCriteriaValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlternativeCriteriaValue
     */
    omit?: AlternativeCriteriaValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeCriteriaValueInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CriteriaScalarFieldEnum: {
    id: 'id',
    criteria_name: 'criteria_name',
    weight: 'weight',
    criterion_type: 'criterion_type'
  };

  export type CriteriaScalarFieldEnum = (typeof CriteriaScalarFieldEnum)[keyof typeof CriteriaScalarFieldEnum]


  export const AlternativeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type AlternativeScalarFieldEnum = (typeof AlternativeScalarFieldEnum)[keyof typeof AlternativeScalarFieldEnum]


  export const AlternativeCriteriaValueScalarFieldEnum: {
    id: 'id',
    alternativeId: 'alternativeId',
    criteriaId: 'criteriaId',
    value: 'value'
  };

  export type AlternativeCriteriaValueScalarFieldEnum = (typeof AlternativeCriteriaValueScalarFieldEnum)[keyof typeof AlternativeCriteriaValueScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CriterionType'
   */
  export type EnumCriterionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CriterionType'>
    


  /**
   * Reference to a field of type 'CriterionType[]'
   */
  export type ListEnumCriterionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CriterionType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    cars?: AlternativeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    cars?: AlternativeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    cars?: AlternativeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type CriteriaWhereInput = {
    AND?: CriteriaWhereInput | CriteriaWhereInput[]
    OR?: CriteriaWhereInput[]
    NOT?: CriteriaWhereInput | CriteriaWhereInput[]
    id?: StringFilter<"Criteria"> | string
    criteria_name?: StringFilter<"Criteria"> | string
    weight?: FloatFilter<"Criteria"> | number
    criterion_type?: EnumCriterionTypeFilter<"Criteria"> | $Enums.CriterionType
    AlternativeCriteriaValue?: AlternativeCriteriaValueListRelationFilter
  }

  export type CriteriaOrderByWithRelationInput = {
    id?: SortOrder
    criteria_name?: SortOrder
    weight?: SortOrder
    criterion_type?: SortOrder
    AlternativeCriteriaValue?: AlternativeCriteriaValueOrderByRelationAggregateInput
  }

  export type CriteriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CriteriaWhereInput | CriteriaWhereInput[]
    OR?: CriteriaWhereInput[]
    NOT?: CriteriaWhereInput | CriteriaWhereInput[]
    criteria_name?: StringFilter<"Criteria"> | string
    weight?: FloatFilter<"Criteria"> | number
    criterion_type?: EnumCriterionTypeFilter<"Criteria"> | $Enums.CriterionType
    AlternativeCriteriaValue?: AlternativeCriteriaValueListRelationFilter
  }, "id">

  export type CriteriaOrderByWithAggregationInput = {
    id?: SortOrder
    criteria_name?: SortOrder
    weight?: SortOrder
    criterion_type?: SortOrder
    _count?: CriteriaCountOrderByAggregateInput
    _avg?: CriteriaAvgOrderByAggregateInput
    _max?: CriteriaMaxOrderByAggregateInput
    _min?: CriteriaMinOrderByAggregateInput
    _sum?: CriteriaSumOrderByAggregateInput
  }

  export type CriteriaScalarWhereWithAggregatesInput = {
    AND?: CriteriaScalarWhereWithAggregatesInput | CriteriaScalarWhereWithAggregatesInput[]
    OR?: CriteriaScalarWhereWithAggregatesInput[]
    NOT?: CriteriaScalarWhereWithAggregatesInput | CriteriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Criteria"> | string
    criteria_name?: StringWithAggregatesFilter<"Criteria"> | string
    weight?: FloatWithAggregatesFilter<"Criteria"> | number
    criterion_type?: EnumCriterionTypeWithAggregatesFilter<"Criteria"> | $Enums.CriterionType
  }

  export type AlternativeWhereInput = {
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    id?: StringFilter<"Alternative"> | string
    name?: StringFilter<"Alternative"> | string
    userId?: StringFilter<"Alternative"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    values?: AlternativeCriteriaValueListRelationFilter
  }

  export type AlternativeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    values?: AlternativeCriteriaValueOrderByRelationAggregateInput
  }

  export type AlternativeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    name?: StringFilter<"Alternative"> | string
    userId?: StringFilter<"Alternative"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    values?: AlternativeCriteriaValueListRelationFilter
  }, "id">

  export type AlternativeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: AlternativeCountOrderByAggregateInput
    _max?: AlternativeMaxOrderByAggregateInput
    _min?: AlternativeMinOrderByAggregateInput
  }

  export type AlternativeScalarWhereWithAggregatesInput = {
    AND?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    OR?: AlternativeScalarWhereWithAggregatesInput[]
    NOT?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alternative"> | string
    name?: StringWithAggregatesFilter<"Alternative"> | string
    userId?: StringWithAggregatesFilter<"Alternative"> | string
  }

  export type AlternativeCriteriaValueWhereInput = {
    AND?: AlternativeCriteriaValueWhereInput | AlternativeCriteriaValueWhereInput[]
    OR?: AlternativeCriteriaValueWhereInput[]
    NOT?: AlternativeCriteriaValueWhereInput | AlternativeCriteriaValueWhereInput[]
    id?: StringFilter<"AlternativeCriteriaValue"> | string
    alternativeId?: StringFilter<"AlternativeCriteriaValue"> | string
    criteriaId?: StringFilter<"AlternativeCriteriaValue"> | string
    value?: StringFilter<"AlternativeCriteriaValue"> | string
    alternative?: XOR<AlternativeScalarRelationFilter, AlternativeWhereInput>
    criteria?: XOR<CriteriaScalarRelationFilter, CriteriaWhereInput>
  }

  export type AlternativeCriteriaValueOrderByWithRelationInput = {
    id?: SortOrder
    alternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
    alternative?: AlternativeOrderByWithRelationInput
    criteria?: CriteriaOrderByWithRelationInput
  }

  export type AlternativeCriteriaValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alternativeId_criteriaId?: AlternativeCriteriaValueAlternativeIdCriteriaIdCompoundUniqueInput
    AND?: AlternativeCriteriaValueWhereInput | AlternativeCriteriaValueWhereInput[]
    OR?: AlternativeCriteriaValueWhereInput[]
    NOT?: AlternativeCriteriaValueWhereInput | AlternativeCriteriaValueWhereInput[]
    alternativeId?: StringFilter<"AlternativeCriteriaValue"> | string
    criteriaId?: StringFilter<"AlternativeCriteriaValue"> | string
    value?: StringFilter<"AlternativeCriteriaValue"> | string
    alternative?: XOR<AlternativeScalarRelationFilter, AlternativeWhereInput>
    criteria?: XOR<CriteriaScalarRelationFilter, CriteriaWhereInput>
  }, "id" | "alternativeId_criteriaId">

  export type AlternativeCriteriaValueOrderByWithAggregationInput = {
    id?: SortOrder
    alternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
    _count?: AlternativeCriteriaValueCountOrderByAggregateInput
    _max?: AlternativeCriteriaValueMaxOrderByAggregateInput
    _min?: AlternativeCriteriaValueMinOrderByAggregateInput
  }

  export type AlternativeCriteriaValueScalarWhereWithAggregatesInput = {
    AND?: AlternativeCriteriaValueScalarWhereWithAggregatesInput | AlternativeCriteriaValueScalarWhereWithAggregatesInput[]
    OR?: AlternativeCriteriaValueScalarWhereWithAggregatesInput[]
    NOT?: AlternativeCriteriaValueScalarWhereWithAggregatesInput | AlternativeCriteriaValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlternativeCriteriaValue"> | string
    alternativeId?: StringWithAggregatesFilter<"AlternativeCriteriaValue"> | string
    criteriaId?: StringWithAggregatesFilter<"AlternativeCriteriaValue"> | string
    value?: StringWithAggregatesFilter<"AlternativeCriteriaValue"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    role?: $Enums.Role
    cars?: AlternativeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    role?: $Enums.Role
    cars?: AlternativeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cars?: AlternativeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cars?: AlternativeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CriteriaCreateInput = {
    id?: string
    criteria_name: string
    weight: number
    criterion_type: $Enums.CriterionType
    AlternativeCriteriaValue?: AlternativeCriteriaValueCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaUncheckedCreateInput = {
    id?: string
    criteria_name: string
    weight: number
    criterion_type: $Enums.CriterionType
    AlternativeCriteriaValue?: AlternativeCriteriaValueUncheckedCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteria_name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    criterion_type?: EnumCriterionTypeFieldUpdateOperationsInput | $Enums.CriterionType
    AlternativeCriteriaValue?: AlternativeCriteriaValueUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteria_name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    criterion_type?: EnumCriterionTypeFieldUpdateOperationsInput | $Enums.CriterionType
    AlternativeCriteriaValue?: AlternativeCriteriaValueUncheckedUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaCreateManyInput = {
    id?: string
    criteria_name: string
    weight: number
    criterion_type: $Enums.CriterionType
  }

  export type CriteriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteria_name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    criterion_type?: EnumCriterionTypeFieldUpdateOperationsInput | $Enums.CriterionType
  }

  export type CriteriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteria_name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    criterion_type?: EnumCriterionTypeFieldUpdateOperationsInput | $Enums.CriterionType
  }

  export type AlternativeCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutCarsInput
    values?: AlternativeCriteriaValueCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    values?: AlternativeCriteriaValueUncheckedCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
    values?: AlternativeCriteriaValueUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    values?: AlternativeCriteriaValueUncheckedUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type AlternativeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCriteriaValueCreateInput = {
    id?: string
    value: string
    alternative: AlternativeCreateNestedOneWithoutValuesInput
    criteria: CriteriaCreateNestedOneWithoutAlternativeCriteriaValueInput
  }

  export type AlternativeCriteriaValueUncheckedCreateInput = {
    id?: string
    alternativeId: string
    criteriaId: string
    value: string
  }

  export type AlternativeCriteriaValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    alternative?: AlternativeUpdateOneRequiredWithoutValuesNestedInput
    criteria?: CriteriaUpdateOneRequiredWithoutAlternativeCriteriaValueNestedInput
  }

  export type AlternativeCriteriaValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    criteriaId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCriteriaValueCreateManyInput = {
    id?: string
    alternativeId: string
    criteriaId: string
    value: string
  }

  export type AlternativeCriteriaValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCriteriaValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    criteriaId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AlternativeListRelationFilter = {
    every?: AlternativeWhereInput
    some?: AlternativeWhereInput
    none?: AlternativeWhereInput
  }

  export type AlternativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumCriterionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CriterionType | EnumCriterionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriterionTypeFilter<$PrismaModel> | $Enums.CriterionType
  }

  export type AlternativeCriteriaValueListRelationFilter = {
    every?: AlternativeCriteriaValueWhereInput
    some?: AlternativeCriteriaValueWhereInput
    none?: AlternativeCriteriaValueWhereInput
  }

  export type AlternativeCriteriaValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CriteriaCountOrderByAggregateInput = {
    id?: SortOrder
    criteria_name?: SortOrder
    weight?: SortOrder
    criterion_type?: SortOrder
  }

  export type CriteriaAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type CriteriaMaxOrderByAggregateInput = {
    id?: SortOrder
    criteria_name?: SortOrder
    weight?: SortOrder
    criterion_type?: SortOrder
  }

  export type CriteriaMinOrderByAggregateInput = {
    id?: SortOrder
    criteria_name?: SortOrder
    weight?: SortOrder
    criterion_type?: SortOrder
  }

  export type CriteriaSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCriterionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CriterionType | EnumCriterionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriterionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CriterionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriterionTypeFilter<$PrismaModel>
    _max?: NestedEnumCriterionTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AlternativeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type AlternativeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type AlternativeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type AlternativeScalarRelationFilter = {
    is?: AlternativeWhereInput
    isNot?: AlternativeWhereInput
  }

  export type CriteriaScalarRelationFilter = {
    is?: CriteriaWhereInput
    isNot?: CriteriaWhereInput
  }

  export type AlternativeCriteriaValueAlternativeIdCriteriaIdCompoundUniqueInput = {
    alternativeId: string
    criteriaId: string
  }

  export type AlternativeCriteriaValueCountOrderByAggregateInput = {
    id?: SortOrder
    alternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
  }

  export type AlternativeCriteriaValueMaxOrderByAggregateInput = {
    id?: SortOrder
    alternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
  }

  export type AlternativeCriteriaValueMinOrderByAggregateInput = {
    id?: SortOrder
    alternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
  }

  export type AlternativeCreateNestedManyWithoutUserInput = {
    create?: XOR<AlternativeCreateWithoutUserInput, AlternativeUncheckedCreateWithoutUserInput> | AlternativeCreateWithoutUserInput[] | AlternativeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutUserInput | AlternativeCreateOrConnectWithoutUserInput[]
    createMany?: AlternativeCreateManyUserInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type AlternativeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlternativeCreateWithoutUserInput, AlternativeUncheckedCreateWithoutUserInput> | AlternativeCreateWithoutUserInput[] | AlternativeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutUserInput | AlternativeCreateOrConnectWithoutUserInput[]
    createMany?: AlternativeCreateManyUserInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AlternativeUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlternativeCreateWithoutUserInput, AlternativeUncheckedCreateWithoutUserInput> | AlternativeCreateWithoutUserInput[] | AlternativeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutUserInput | AlternativeCreateOrConnectWithoutUserInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutUserInput | AlternativeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlternativeCreateManyUserInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutUserInput | AlternativeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutUserInput | AlternativeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type AlternativeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlternativeCreateWithoutUserInput, AlternativeUncheckedCreateWithoutUserInput> | AlternativeCreateWithoutUserInput[] | AlternativeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutUserInput | AlternativeCreateOrConnectWithoutUserInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutUserInput | AlternativeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlternativeCreateManyUserInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutUserInput | AlternativeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutUserInput | AlternativeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type AlternativeCriteriaValueCreateNestedManyWithoutCriteriaInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput> | AlternativeCriteriaValueCreateWithoutCriteriaInput[] | AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput | AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput[]
    createMany?: AlternativeCriteriaValueCreateManyCriteriaInputEnvelope
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
  }

  export type AlternativeCriteriaValueUncheckedCreateNestedManyWithoutCriteriaInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput> | AlternativeCriteriaValueCreateWithoutCriteriaInput[] | AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput | AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput[]
    createMany?: AlternativeCriteriaValueCreateManyCriteriaInputEnvelope
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCriterionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CriterionType
  }

  export type AlternativeCriteriaValueUpdateManyWithoutCriteriaNestedInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput> | AlternativeCriteriaValueCreateWithoutCriteriaInput[] | AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput | AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput[]
    upsert?: AlternativeCriteriaValueUpsertWithWhereUniqueWithoutCriteriaInput | AlternativeCriteriaValueUpsertWithWhereUniqueWithoutCriteriaInput[]
    createMany?: AlternativeCriteriaValueCreateManyCriteriaInputEnvelope
    set?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    disconnect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    delete?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    update?: AlternativeCriteriaValueUpdateWithWhereUniqueWithoutCriteriaInput | AlternativeCriteriaValueUpdateWithWhereUniqueWithoutCriteriaInput[]
    updateMany?: AlternativeCriteriaValueUpdateManyWithWhereWithoutCriteriaInput | AlternativeCriteriaValueUpdateManyWithWhereWithoutCriteriaInput[]
    deleteMany?: AlternativeCriteriaValueScalarWhereInput | AlternativeCriteriaValueScalarWhereInput[]
  }

  export type AlternativeCriteriaValueUncheckedUpdateManyWithoutCriteriaNestedInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput> | AlternativeCriteriaValueCreateWithoutCriteriaInput[] | AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput | AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput[]
    upsert?: AlternativeCriteriaValueUpsertWithWhereUniqueWithoutCriteriaInput | AlternativeCriteriaValueUpsertWithWhereUniqueWithoutCriteriaInput[]
    createMany?: AlternativeCriteriaValueCreateManyCriteriaInputEnvelope
    set?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    disconnect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    delete?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    update?: AlternativeCriteriaValueUpdateWithWhereUniqueWithoutCriteriaInput | AlternativeCriteriaValueUpdateWithWhereUniqueWithoutCriteriaInput[]
    updateMany?: AlternativeCriteriaValueUpdateManyWithWhereWithoutCriteriaInput | AlternativeCriteriaValueUpdateManyWithWhereWithoutCriteriaInput[]
    deleteMany?: AlternativeCriteriaValueScalarWhereInput | AlternativeCriteriaValueScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCarsInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    connect?: UserWhereUniqueInput
  }

  export type AlternativeCriteriaValueCreateNestedManyWithoutAlternativeInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput> | AlternativeCriteriaValueCreateWithoutAlternativeInput[] | AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput | AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput[]
    createMany?: AlternativeCriteriaValueCreateManyAlternativeInputEnvelope
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
  }

  export type AlternativeCriteriaValueUncheckedCreateNestedManyWithoutAlternativeInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput> | AlternativeCriteriaValueCreateWithoutAlternativeInput[] | AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput | AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput[]
    createMany?: AlternativeCriteriaValueCreateManyAlternativeInputEnvelope
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    upsert?: UserUpsertWithoutCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarsInput, UserUpdateWithoutCarsInput>, UserUncheckedUpdateWithoutCarsInput>
  }

  export type AlternativeCriteriaValueUpdateManyWithoutAlternativeNestedInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput> | AlternativeCriteriaValueCreateWithoutAlternativeInput[] | AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput | AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput[]
    upsert?: AlternativeCriteriaValueUpsertWithWhereUniqueWithoutAlternativeInput | AlternativeCriteriaValueUpsertWithWhereUniqueWithoutAlternativeInput[]
    createMany?: AlternativeCriteriaValueCreateManyAlternativeInputEnvelope
    set?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    disconnect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    delete?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    update?: AlternativeCriteriaValueUpdateWithWhereUniqueWithoutAlternativeInput | AlternativeCriteriaValueUpdateWithWhereUniqueWithoutAlternativeInput[]
    updateMany?: AlternativeCriteriaValueUpdateManyWithWhereWithoutAlternativeInput | AlternativeCriteriaValueUpdateManyWithWhereWithoutAlternativeInput[]
    deleteMany?: AlternativeCriteriaValueScalarWhereInput | AlternativeCriteriaValueScalarWhereInput[]
  }

  export type AlternativeCriteriaValueUncheckedUpdateManyWithoutAlternativeNestedInput = {
    create?: XOR<AlternativeCriteriaValueCreateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput> | AlternativeCriteriaValueCreateWithoutAlternativeInput[] | AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput[]
    connectOrCreate?: AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput | AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput[]
    upsert?: AlternativeCriteriaValueUpsertWithWhereUniqueWithoutAlternativeInput | AlternativeCriteriaValueUpsertWithWhereUniqueWithoutAlternativeInput[]
    createMany?: AlternativeCriteriaValueCreateManyAlternativeInputEnvelope
    set?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    disconnect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    delete?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    connect?: AlternativeCriteriaValueWhereUniqueInput | AlternativeCriteriaValueWhereUniqueInput[]
    update?: AlternativeCriteriaValueUpdateWithWhereUniqueWithoutAlternativeInput | AlternativeCriteriaValueUpdateWithWhereUniqueWithoutAlternativeInput[]
    updateMany?: AlternativeCriteriaValueUpdateManyWithWhereWithoutAlternativeInput | AlternativeCriteriaValueUpdateManyWithWhereWithoutAlternativeInput[]
    deleteMany?: AlternativeCriteriaValueScalarWhereInput | AlternativeCriteriaValueScalarWhereInput[]
  }

  export type AlternativeCreateNestedOneWithoutValuesInput = {
    create?: XOR<AlternativeCreateWithoutValuesInput, AlternativeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutValuesInput
    connect?: AlternativeWhereUniqueInput
  }

  export type CriteriaCreateNestedOneWithoutAlternativeCriteriaValueInput = {
    create?: XOR<CriteriaCreateWithoutAlternativeCriteriaValueInput, CriteriaUncheckedCreateWithoutAlternativeCriteriaValueInput>
    connectOrCreate?: CriteriaCreateOrConnectWithoutAlternativeCriteriaValueInput
    connect?: CriteriaWhereUniqueInput
  }

  export type AlternativeUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<AlternativeCreateWithoutValuesInput, AlternativeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutValuesInput
    upsert?: AlternativeUpsertWithoutValuesInput
    connect?: AlternativeWhereUniqueInput
    update?: XOR<XOR<AlternativeUpdateToOneWithWhereWithoutValuesInput, AlternativeUpdateWithoutValuesInput>, AlternativeUncheckedUpdateWithoutValuesInput>
  }

  export type CriteriaUpdateOneRequiredWithoutAlternativeCriteriaValueNestedInput = {
    create?: XOR<CriteriaCreateWithoutAlternativeCriteriaValueInput, CriteriaUncheckedCreateWithoutAlternativeCriteriaValueInput>
    connectOrCreate?: CriteriaCreateOrConnectWithoutAlternativeCriteriaValueInput
    upsert?: CriteriaUpsertWithoutAlternativeCriteriaValueInput
    connect?: CriteriaWhereUniqueInput
    update?: XOR<XOR<CriteriaUpdateToOneWithWhereWithoutAlternativeCriteriaValueInput, CriteriaUpdateWithoutAlternativeCriteriaValueInput>, CriteriaUncheckedUpdateWithoutAlternativeCriteriaValueInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumCriterionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CriterionType | EnumCriterionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriterionTypeFilter<$PrismaModel> | $Enums.CriterionType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCriterionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CriterionType | EnumCriterionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriterionType[] | ListEnumCriterionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriterionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CriterionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriterionTypeFilter<$PrismaModel>
    _max?: NestedEnumCriterionTypeFilter<$PrismaModel>
  }

  export type AlternativeCreateWithoutUserInput = {
    id?: string
    name: string
    values?: AlternativeCriteriaValueCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    values?: AlternativeCriteriaValueUncheckedCreateNestedManyWithoutAlternativeInput
  }

  export type AlternativeCreateOrConnectWithoutUserInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutUserInput, AlternativeUncheckedCreateWithoutUserInput>
  }

  export type AlternativeCreateManyUserInputEnvelope = {
    data: AlternativeCreateManyUserInput | AlternativeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlternativeUpsertWithWhereUniqueWithoutUserInput = {
    where: AlternativeWhereUniqueInput
    update: XOR<AlternativeUpdateWithoutUserInput, AlternativeUncheckedUpdateWithoutUserInput>
    create: XOR<AlternativeCreateWithoutUserInput, AlternativeUncheckedCreateWithoutUserInput>
  }

  export type AlternativeUpdateWithWhereUniqueWithoutUserInput = {
    where: AlternativeWhereUniqueInput
    data: XOR<AlternativeUpdateWithoutUserInput, AlternativeUncheckedUpdateWithoutUserInput>
  }

  export type AlternativeUpdateManyWithWhereWithoutUserInput = {
    where: AlternativeScalarWhereInput
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyWithoutUserInput>
  }

  export type AlternativeScalarWhereInput = {
    AND?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    OR?: AlternativeScalarWhereInput[]
    NOT?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    id?: StringFilter<"Alternative"> | string
    name?: StringFilter<"Alternative"> | string
    userId?: StringFilter<"Alternative"> | string
  }

  export type AlternativeCriteriaValueCreateWithoutCriteriaInput = {
    id?: string
    value: string
    alternative: AlternativeCreateNestedOneWithoutValuesInput
  }

  export type AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput = {
    id?: string
    alternativeId: string
    value: string
  }

  export type AlternativeCriteriaValueCreateOrConnectWithoutCriteriaInput = {
    where: AlternativeCriteriaValueWhereUniqueInput
    create: XOR<AlternativeCriteriaValueCreateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput>
  }

  export type AlternativeCriteriaValueCreateManyCriteriaInputEnvelope = {
    data: AlternativeCriteriaValueCreateManyCriteriaInput | AlternativeCriteriaValueCreateManyCriteriaInput[]
    skipDuplicates?: boolean
  }

  export type AlternativeCriteriaValueUpsertWithWhereUniqueWithoutCriteriaInput = {
    where: AlternativeCriteriaValueWhereUniqueInput
    update: XOR<AlternativeCriteriaValueUpdateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedUpdateWithoutCriteriaInput>
    create: XOR<AlternativeCriteriaValueCreateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedCreateWithoutCriteriaInput>
  }

  export type AlternativeCriteriaValueUpdateWithWhereUniqueWithoutCriteriaInput = {
    where: AlternativeCriteriaValueWhereUniqueInput
    data: XOR<AlternativeCriteriaValueUpdateWithoutCriteriaInput, AlternativeCriteriaValueUncheckedUpdateWithoutCriteriaInput>
  }

  export type AlternativeCriteriaValueUpdateManyWithWhereWithoutCriteriaInput = {
    where: AlternativeCriteriaValueScalarWhereInput
    data: XOR<AlternativeCriteriaValueUpdateManyMutationInput, AlternativeCriteriaValueUncheckedUpdateManyWithoutCriteriaInput>
  }

  export type AlternativeCriteriaValueScalarWhereInput = {
    AND?: AlternativeCriteriaValueScalarWhereInput | AlternativeCriteriaValueScalarWhereInput[]
    OR?: AlternativeCriteriaValueScalarWhereInput[]
    NOT?: AlternativeCriteriaValueScalarWhereInput | AlternativeCriteriaValueScalarWhereInput[]
    id?: StringFilter<"AlternativeCriteriaValue"> | string
    alternativeId?: StringFilter<"AlternativeCriteriaValue"> | string
    criteriaId?: StringFilter<"AlternativeCriteriaValue"> | string
    value?: StringFilter<"AlternativeCriteriaValue"> | string
  }

  export type UserCreateWithoutCarsInput = {
    id?: string
    username: string
    email: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutCarsInput = {
    id?: string
    username: string
    email: string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
  }

  export type AlternativeCriteriaValueCreateWithoutAlternativeInput = {
    id?: string
    value: string
    criteria: CriteriaCreateNestedOneWithoutAlternativeCriteriaValueInput
  }

  export type AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput = {
    id?: string
    criteriaId: string
    value: string
  }

  export type AlternativeCriteriaValueCreateOrConnectWithoutAlternativeInput = {
    where: AlternativeCriteriaValueWhereUniqueInput
    create: XOR<AlternativeCriteriaValueCreateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput>
  }

  export type AlternativeCriteriaValueCreateManyAlternativeInputEnvelope = {
    data: AlternativeCriteriaValueCreateManyAlternativeInput | AlternativeCriteriaValueCreateManyAlternativeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCarsInput = {
    update: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
  }

  export type UserUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AlternativeCriteriaValueUpsertWithWhereUniqueWithoutAlternativeInput = {
    where: AlternativeCriteriaValueWhereUniqueInput
    update: XOR<AlternativeCriteriaValueUpdateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedUpdateWithoutAlternativeInput>
    create: XOR<AlternativeCriteriaValueCreateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedCreateWithoutAlternativeInput>
  }

  export type AlternativeCriteriaValueUpdateWithWhereUniqueWithoutAlternativeInput = {
    where: AlternativeCriteriaValueWhereUniqueInput
    data: XOR<AlternativeCriteriaValueUpdateWithoutAlternativeInput, AlternativeCriteriaValueUncheckedUpdateWithoutAlternativeInput>
  }

  export type AlternativeCriteriaValueUpdateManyWithWhereWithoutAlternativeInput = {
    where: AlternativeCriteriaValueScalarWhereInput
    data: XOR<AlternativeCriteriaValueUpdateManyMutationInput, AlternativeCriteriaValueUncheckedUpdateManyWithoutAlternativeInput>
  }

  export type AlternativeCreateWithoutValuesInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutCarsInput
  }

  export type AlternativeUncheckedCreateWithoutValuesInput = {
    id?: string
    name: string
    userId: string
  }

  export type AlternativeCreateOrConnectWithoutValuesInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutValuesInput, AlternativeUncheckedCreateWithoutValuesInput>
  }

  export type CriteriaCreateWithoutAlternativeCriteriaValueInput = {
    id?: string
    criteria_name: string
    weight: number
    criterion_type: $Enums.CriterionType
  }

  export type CriteriaUncheckedCreateWithoutAlternativeCriteriaValueInput = {
    id?: string
    criteria_name: string
    weight: number
    criterion_type: $Enums.CriterionType
  }

  export type CriteriaCreateOrConnectWithoutAlternativeCriteriaValueInput = {
    where: CriteriaWhereUniqueInput
    create: XOR<CriteriaCreateWithoutAlternativeCriteriaValueInput, CriteriaUncheckedCreateWithoutAlternativeCriteriaValueInput>
  }

  export type AlternativeUpsertWithoutValuesInput = {
    update: XOR<AlternativeUpdateWithoutValuesInput, AlternativeUncheckedUpdateWithoutValuesInput>
    create: XOR<AlternativeCreateWithoutValuesInput, AlternativeUncheckedCreateWithoutValuesInput>
    where?: AlternativeWhereInput
  }

  export type AlternativeUpdateToOneWithWhereWithoutValuesInput = {
    where?: AlternativeWhereInput
    data: XOR<AlternativeUpdateWithoutValuesInput, AlternativeUncheckedUpdateWithoutValuesInput>
  }

  export type AlternativeUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCarsNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CriteriaUpsertWithoutAlternativeCriteriaValueInput = {
    update: XOR<CriteriaUpdateWithoutAlternativeCriteriaValueInput, CriteriaUncheckedUpdateWithoutAlternativeCriteriaValueInput>
    create: XOR<CriteriaCreateWithoutAlternativeCriteriaValueInput, CriteriaUncheckedCreateWithoutAlternativeCriteriaValueInput>
    where?: CriteriaWhereInput
  }

  export type CriteriaUpdateToOneWithWhereWithoutAlternativeCriteriaValueInput = {
    where?: CriteriaWhereInput
    data: XOR<CriteriaUpdateWithoutAlternativeCriteriaValueInput, CriteriaUncheckedUpdateWithoutAlternativeCriteriaValueInput>
  }

  export type CriteriaUpdateWithoutAlternativeCriteriaValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteria_name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    criterion_type?: EnumCriterionTypeFieldUpdateOperationsInput | $Enums.CriterionType
  }

  export type CriteriaUncheckedUpdateWithoutAlternativeCriteriaValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteria_name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    criterion_type?: EnumCriterionTypeFieldUpdateOperationsInput | $Enums.CriterionType
  }

  export type AlternativeCreateManyUserInput = {
    id?: string
    name: string
  }

  export type AlternativeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    values?: AlternativeCriteriaValueUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    values?: AlternativeCriteriaValueUncheckedUpdateManyWithoutAlternativeNestedInput
  }

  export type AlternativeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCriteriaValueCreateManyCriteriaInput = {
    id?: string
    alternativeId: string
    value: string
  }

  export type AlternativeCriteriaValueUpdateWithoutCriteriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    alternative?: AlternativeUpdateOneRequiredWithoutValuesNestedInput
  }

  export type AlternativeCriteriaValueUncheckedUpdateWithoutCriteriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCriteriaValueUncheckedUpdateManyWithoutCriteriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alternativeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCriteriaValueCreateManyAlternativeInput = {
    id?: string
    criteriaId: string
    value: string
  }

  export type AlternativeCriteriaValueUpdateWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    criteria?: CriteriaUpdateOneRequiredWithoutAlternativeCriteriaValueNestedInput
  }

  export type AlternativeCriteriaValueUncheckedUpdateWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteriaId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativeCriteriaValueUncheckedUpdateManyWithoutAlternativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    criteriaId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }



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