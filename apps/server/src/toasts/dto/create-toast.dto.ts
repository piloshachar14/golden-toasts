import {
  IsDate,
  IsString,
  IsBoolean,
  IsUUID,
  Matches,
  IsArray,
} from 'class-validator';
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

  solids: string;

  fluids: string;
}
