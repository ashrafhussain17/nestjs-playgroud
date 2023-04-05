import {Get, Post, Body, Put, Delete, Query, Param, Controller} from '@nestjs/common';
import { Request } from 'express';
import { CreateArticleDto } from '@/article/dtos';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { ArticleService } from './article.service';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('articles')
export class ArticleController {

    constructor(private readonly articleService: ArticleService){}

    @ApiOperation({ summary: 'Create article' })
    @ApiResponse({ status: 201, description: 'The article has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get('/:id')
    async getArticle(@Param('id') id) : Promise<CreateArticleDto> {
        return this.articleService.getArticleById(id);
    }

    @ApiOperation({ summary: 'Create article' })
    @ApiResponse({ status: 201, description: 'The article has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Post()
    async create(@Body('article') articleData: CreateArticleDto) {
        return articleData;
    }
}