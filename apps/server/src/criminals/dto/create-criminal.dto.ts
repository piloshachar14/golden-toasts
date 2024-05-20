import { IsString, IsBoolean, IsUUID, Matches } from 'class-validator';
export class CreateCriminalDto {
  @IsUUID()
  userId: string;
  @IsString()
  @Matches(/^[a-zא-ת]+( [a-zא-ת]+)*$/)
  toast: string;
  @IsBoolean()
  isPersonaNonGrata: boolean;
}
