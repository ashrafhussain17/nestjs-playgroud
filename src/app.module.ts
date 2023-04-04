import { Module } from '@nestjs/common';
import { AppController } from './app-controller/app.controller';
import { AppService } from './app-controller/app.service';
import { FirstController } from '@/first-controller/first-controller.controller';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [],
  controllers: [AppController, FirstController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
