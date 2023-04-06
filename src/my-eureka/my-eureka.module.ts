import { Module } from '@nestjs/common';
import { EurekaModule } from 'nestjs-eureka';

@Module({
  imports: [
    EurekaModule.forRoot({
      eureka: 'http://sa:egp12345!@192.168.3.89:6001/eureka/apps',
      service: {
        name: 'my-nestjs',
        port: 8080,
      },
    }),
  ],
})
export class MyEurekaModule {}
