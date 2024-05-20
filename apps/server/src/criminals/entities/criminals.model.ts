import {
  Model,
  Column,
  Table,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../../users/entities/user.model';

@Table
export class Criminal extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  toast: string;
  @Column
  isPersonaNonGrata: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUID })
  userId: string;

  @BelongsTo(() => User, { foreignKey: 'userId', targetKey: 'id' })
  user: User;
}
