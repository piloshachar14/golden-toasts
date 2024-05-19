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
export class Toast extends Model {
  @PrimaryKey
  @Column({ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUID })
  userId: string;

  @Column(DataTypes.DATE) // Use DataTypes.DATEONLY for date without time
  date: Date;

  @Column
  hasHappened: boolean;

  @Column
  desc: string;

  @Column
  solids: string;

  @Column
  fluids: string;

  @BelongsTo(() => User, { foreignKey: 'userId', targetKey: 'id' })
  user: User;
}
