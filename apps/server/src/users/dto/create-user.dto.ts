import {
  IsString,
  IsBoolean,
  Length,
  IsNotEmpty,
  Matches,
  Contains,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @Length(7, 7)
  armyId: string;
  @IsString()
  @IsNotEmpty()
  @Matches(/^[\u0590-\u05FF\-']+( [\u0590-\u05FF\-']+)*$/)
  fullName: string;
  @IsString()
  @Length(6, 15)
  password: string;
  @IsBoolean()
  isAdmin: boolean;
}
