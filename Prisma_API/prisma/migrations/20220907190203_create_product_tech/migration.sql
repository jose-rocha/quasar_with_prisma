-- CreateTable
CREATE TABLE "products_tech" (
    "id" TEXT NOT NULL,
    "name_product" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_tech_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_tech_bar_code_key" ON "products_tech"("bar_code");
