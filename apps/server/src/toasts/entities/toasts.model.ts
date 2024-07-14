import {
  Model,
  Column,
  Table,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.model';
import { DataTypes } from 'sequelize';
@Table
export class Toast extends Model {
  @PrimaryKey
  @Column({ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUID })
  userId: string;

  @Column(DataTypes.DATE)
  date: Date;

  @Column
  hasHappened: boolean;

  @Column
  desc: string;

  @Column(DataTypes.ARRAY(DataTypes.STRING))
  solids: string[];

  @Column(DataTypes.ARRAY(DataTypes.STRING))
  fluids: string[];

  @BelongsTo(() => User, { foreignKey: 'userId', targetKey: 'id' })
  user: User;
}
