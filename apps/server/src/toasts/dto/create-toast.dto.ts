import { IsDate, IsString, IsBoolean, IsUUID, Matches } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateToastDto {
  @IsUUID()
  userId: string;
  @IsDate()
  @Transform(({ value }) => new Date(value))
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
