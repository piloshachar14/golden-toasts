import {
  IsString,
  Length,
  IsNotEmpty,
  Matches,
  IsEmail,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[\u0590-\u05FF\-']+( [\u0590-\u05FF\-']+)*$/)
  fullName: string;
  @IsString()
  @Length(6, 15)
  password: string;
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
}
