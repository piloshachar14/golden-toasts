import { IsDate, IsString, IsBoolean, IsUUID, Matches } from 'class-validator';

export class CreateToastDto {
  @IsUUID()
  userId: string;
  @IsDate({ message: 'please enter a date' })
  date: Date;
  @IsBoolean()
  hasHappened: boolean;
  @IsString()
  @Matches(/^[a-zא-ת]+( [a-zא-ת]+)*$/)
  desc: string;
  @IsString()
  @Matches(/^[a-zא-ת]+( [a-zא-ת]+)*$/)
  solids: string;
  @IsString()
  @Matches(/^[a-zא-ת]+( [a-zא-ת]+)*$/)
  fluids: string;
}
