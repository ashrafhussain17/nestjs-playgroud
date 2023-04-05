import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Query,
  Param,
  Controller,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from '@/user/dtos/index';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserRO } from './user.interface';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.createNewUser(userData);
  }

  @ApiOperation({ summary: 'Get a user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully fetched.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('/:firstName')
  async getAUserByFirstName(
    @Param('firstName') firstName: string,
  ): Promise<UserRO> {
    return this.userService.getUserByFirstName(firstName);
  }
}
