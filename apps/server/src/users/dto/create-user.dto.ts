import {
  IsString,
  IsBoolean,
  Length,
  IsNotEmpty,
  Matches,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @Length(7, 7)
  armyId: string;
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z]+( [a-zA-Z]+)$/)
  fullName: string;
  @IsString()
  @Matches(/^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,15}$/)
  @Length(6, 15)
  password: string;
  @IsBoolean()
  isAdmin: boolean;
}

