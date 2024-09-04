import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'user',
  schema: 'auth',
})
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  fullName: string;

  @Column
  password: string;

  @Column
  email: string;
}
