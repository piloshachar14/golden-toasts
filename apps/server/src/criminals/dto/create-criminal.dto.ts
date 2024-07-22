import { IsBoolean, IsUUID } from 'class-validator';
export class CreateCriminalDto {
  @IsUUID()
  userId: string;
  @IsBoolean()
  isPersonaNonGrata: boolean;
}
