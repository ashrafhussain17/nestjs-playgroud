import { Repository } from 'typeorm';
import { UserEntity } from '@/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async findByFirstName(firstName: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ firstName });
  }
}
