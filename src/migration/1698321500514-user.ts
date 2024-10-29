import { MigrationInterface, QueryRunner } from "typeorm";

export class User1698321500514 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` 
          --Table Definition
          CREATE TABLE "users"  (
            "id" uniqueidentifier NOT NULL DEFAULT NEWID(),
            "name" nvarchar(max) NOT NULL,
            "email" nvarchar(max) NOT NULL,
            "password" nvarchar(max) NOT NULL,
            "role"  nvarchar(max) NOT NULL DEFAULT 'user',
            "createdAt" datetime NOT NULL DEFAULT GETDATE(),
            "updatedAt" datetime NOT NULL DEFAULT GETDATE(),
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
          )

          
          
          
          
          `
    ),
      undefined;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`, undefined);
  }
}
