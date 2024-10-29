import { MigrationInterface, QueryRunner } from "typeorm";

export class Movie1698321512351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        --Table Definition
        CREATE TABLE "movies"  (
            "id" uniqueidentifier NOT NULL DEFAULT NEWID(),
            "title" nvarchar(max) NOT NULL,
            "description" nvarchar(max) NOT NULL,
            "director" nvarchar(max) NOT NULL,
            "year" int NOT NULL,
            "rating" nvarchar(max) NOT NULL,
            "image" nvarchar(max) NOT NULL,
            "cast" nvarchar(max) NOT NULL,
            "createdAt" datetime NOT NULL DEFAULT GETDATE(),
            "updatedAt" datetime NOT NULL DEFAULT GETDATE(),
            CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
          )
          
          
          
          
          
          `),
      undefined;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movies"`, undefined);
  }
}
