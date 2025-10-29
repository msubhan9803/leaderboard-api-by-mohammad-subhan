import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUser1761708300000 implements MigrationInterface {
    name = 'AddUser1761708300000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_user_name" UNIQUE ("name"), CONSTRAINT "PK_user_id" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
