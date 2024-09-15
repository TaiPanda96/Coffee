-- CreateTable
CREATE TABLE "coffee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roaster" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "quantity_description" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "currency_code" TEXT NOT NULL,
    "reviews" DECIMAL(65,30),
    "img" TEXT NOT NULL,
    "product_url" TEXT NOT NULL,
    "source_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "brew_method" TEXT,
    "taste_notes" TEXT,
    "process" TEXT,
    "region" TEXT,
    "roast_level" TEXT,

    CONSTRAINT "coffee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coffee_name_roaster_product_url_key" ON "coffee"("name", "roaster", "product_url");
