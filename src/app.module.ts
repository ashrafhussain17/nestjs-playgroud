import { Module } from '@nestjs/common';
import { AppController } from './app-controller/app.controller';
import { AppService } from './app-controller/app.service';
import { FirstController } from '@/first-controller/first-controller.controller';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@/config/config.service';
import { UserEntity } from '@/user/user.entity';
import { SupplyOrderModule } from './supply-order/supply-order.module';
import { MyEurekaModule } from './my-eureka/my-eureka.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    ArticleModule,
    SupplyOrderModule,
    MyEurekaModule,
  ],
  controllers: [AppController, FirstController],
  providers: [AppService],
})
export class AppModule {}
