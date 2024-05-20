import { IsDate , IsString ,IsBoolean,IsUUID} from 'class-validator';

export class CreateToastDto {
  @IsUUID()
  userId: string;
  @IsDate({message:'please enter a date'})
  date: Date;
  @IsBoolean()
  hasHappened: boolean;
  @IsString()
  desc: string;
  @IsString()
  solids: string;
  @IsString()
  fluids: string;
}
