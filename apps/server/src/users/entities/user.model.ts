import { Column, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Criminal } from '../../criminals/entities/criminals.model';
import { Toast } from '../../toasts/entities/toasts.model';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  armyId: string;

  @Column
  fullName: string;

  @Column
  password: string;

  @Column({ defaultValue: false })
  isAdmin: boolean;
  @HasOne(() => Criminal)
  criminal: Criminal;
  
  @HasOne(() => Toast)
  toast: Toast;
}
