import { MigrationInterface, QueryRunner } from "typeorm"

export class Rating1684263077972 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` CREATE TABLE IF NOT EXISTS rating ( 
            id INT PRIMARY KEY AUTO_INCREMENT,
            filmid INT,
            uid INT,
            FOREIGN KEY (filmid) REFERENCES films(id) ON DELETE CASCADE,
            FOREIGN KEY (uid) REFERENCES users(id) ON DELETE CASCADE,
            ratings decimal(2,1) NOT NULL, 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS rating`);
    }

}
