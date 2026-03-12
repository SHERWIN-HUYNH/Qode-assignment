-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "cloudinary_id" TEXT NOT NULL,
    "cloudinary_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "image_id" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "images_created_at_idx" ON "images"("created_at");

-- CreateIndex
CREATE INDEX "comments_image_id_idx" ON "comments"("image_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;
