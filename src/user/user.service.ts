import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '@/user/dtos/index';
import { UserRO } from '@/user/user.interface';
import { Repository, getCustomRepository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { validate } from 'class-validator';
import { UserRepository } from '@/user/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async getUserByFirstName(firstName: string): Promise<UserRO> {
    const userInDb = await this.userRepository.findByFirstName(firstName);
    return this.buildUserRO(userInDb);
  }

  async createNewUser(dto: CreateUserDto): Promise<UserRO> {
    // check uniqueness of username/email
    const { firstName, lastName, isActive } = dto;

    const checkIfExists = await this.userRepository.findOneBy({ firstName });

    if (checkIfExists) {
      const errors = { firstName: 'firstName and email must be unique.' };
      throw new HttpException(
        { message: 'Input data validation failed', errors },
        HttpStatus.BAD_REQUEST,
      );
    }

    // create new user
    let newUser = new UserEntity();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.isActive = isActive;

    const errors = await validate(newUser);
    if (errors.length > 0) {
      const _errors = { username: 'Userinput is not valid.' };
      throw new HttpException(
        { message: 'Input data validation failed', _errors },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const savedUser = await this.userRepository.save(newUser);
      return this.buildUserRO(savedUser);
    }
  }

  private buildUserRO(user: UserEntity) {
    const userRO = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      isActive: user.isActive,
    };

    return { user: userRO };
  }
}
