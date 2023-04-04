import { User } from '@/dtos/user';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Validate } from 'class-validator';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';

@Controller('first')
export class FirstController {
  @Get('test')
  getFirst(@Req() myRequest: Request): object {
    return {
      url: myRequest.url,
      hostname: myRequest.hostname,
    };
  }

  @Post('create')
  @ApiOperation({ summary: 'Create article' })
  @ApiResponse({ status: 201, description: 'The article has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createFirstController(@Body() requestBody: User, @Res() response: Response): any {
    console.log(requestBody)
    const response1 = { statusCode: HttpStatus.CREATED, body: requestBody }
    response.send(response1);
  }
}
