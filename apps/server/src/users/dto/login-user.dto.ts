import { IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(7, 7)
  armyId: string;
  @IsString()
  @Length(6, 15)
  password: string;
}
