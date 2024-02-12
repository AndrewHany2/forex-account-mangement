import { Field, InputType } from '@nestjs/graphql';
import {
  MinLength,
  IsEmail,
  IsString,
  MaxLength,
  Matches,
} from 'class-validator';
import { Match } from './match.decorator';

@InputType()
export class CreateCustomerInput {
  @MinLength(1)
  @Field()
  firstName: string;

  @MinLength(1)
  @Field()
  lastName: string;

  @MinLength(1)
  @Field()
  title: string;

  @MinLength(1)
  @Field()
  country: string;

  @MinLength(1)
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @Field()
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Match('password')
  @Field()
  passwordConfirm: string;
}
