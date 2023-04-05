import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from '@/article/dtos';

@Injectable()
export class ArticleService {

    async getArticleById(id: Number) : Promise<CreateArticleDto> {
        console.log(id)
        return {
            title: 'Hello from service',
            description: "Example Description",
            body : "Example Body",
            tagList : ["tag1", "tag2"]
        };
    }
}
