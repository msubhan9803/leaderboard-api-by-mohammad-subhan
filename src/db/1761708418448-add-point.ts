import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPoint1761708418448 implements MigrationInterface {
    name = 'AddPoint1761708418448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "point" ("id" SERIAL NOT NULL, "value" integer NOT NULL, "userId" integer, CONSTRAINT "PK_391f59a9491a08961038a615371" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "point" ADD CONSTRAINT "FK_c01766b92e52572f0b871c24bb6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "point" DROP CONSTRAINT "FK_c01766b92e52572f0b871c24bb6"`);
        await queryRunner.query(`DROP TABLE "point"`);
    }

}
