
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CoffeeScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Coffee: 'Coffee'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/taishanlin/Desktop/coffee/Coffee/coffee-app/src/gen/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "metrics",
      "views",
      "prismaSchemaFolder",
      "omitApi"
    ],
    "sourceFilePath": "/Users/taishanlin/Desktop/coffee/Coffee/coffee-app/prisma/schema/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma/schema",
  "clientVersion": "5.19.1",
  "engineVersion": "69d742ee20b815d88e17e54db4a2a7a3b30324e3",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "model Coffee {\n  id                  String   @id @default(uuid())\n  name                String   @map(\"name\")\n  roaster             String   @map(\"roaster\")\n  quantity            Int      @map(\"quantity\")\n  quantityDescription String?  @map(\"quantity_description\")\n  price               Decimal  @map(\"price\")\n  rating              Decimal  @map(\"rating\")\n  currencyCode        String   @map(\"currency_code\")\n  reviews             Decimal? @map(\"reviews\")\n  img                 String   @map(\"img\")\n  productUrl          String   @map(\"product_url\")\n  sourceUrl           String   @map(\"source_url\")\n  createdAt           DateTime @default(now())\n  updatedAt           DateTime @updatedAt @map(\"updated_at\")\n  brewMethod          String?  @map(\"brew_method\")\n  tasteNotes          String?  @map(\"taste_notes\")\n  process             String?  @map(\"process\")\n  region              String?  @map(\"region\")\n  roastLevel          String?  @map(\"roast_level\")\n\n  @@unique([name, roaster, productUrl], name: \"uix_name_roaster_product_url\")\n  @@map(\"coffee\")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../../src/gen/prisma\"\n  previewFeatures = [\"metrics\", \"prismaSchemaFolder\", \"omitApi\", \"views\", \"driverAdapters\"]\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n",
  "inlineSchemaHash": "b210a86e402dcf441e028941ed4a9f664e64ec3d63605fbecedfe5665efb4387",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Coffee\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"name\"},{\"name\":\"roaster\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"roaster\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"quantity\"},{\"name\":\"quantityDescription\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"quantity_description\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"price\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"rating\"},{\"name\":\"currencyCode\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"currency_code\"},{\"name\":\"reviews\",\"kind\":\"scalar\",\"type\":\"Decimal\",\"dbName\":\"reviews\"},{\"name\":\"img\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"img\"},{\"name\":\"productUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"product_url\"},{\"name\":\"sourceUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"source_url\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"brewMethod\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"brew_method\"},{\"name\":\"tasteNotes\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"taste_notes\"},{\"name\":\"process\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"process\"},{\"name\":\"region\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"region\"},{\"name\":\"roastLevel\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"roast_level\"}],\"dbName\":\"coffee\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

