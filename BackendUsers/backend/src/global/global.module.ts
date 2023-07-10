import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { UsersController } from 'src/users/users.controller';
import { Users } from 'output/entities/Users';
import { BusinessEntity } from 'output/entities/BusinessEntity';
import { UsersEmail } from 'output/entities/UsersEmail';
import { UsersPhones } from 'output/entities/UsersPhones';
import { UsersRoles } from 'output/entities/UsersRoles';
import { Roles } from 'output/entities/Roles';
import { PassportModule } from '@nestjs/passport';
import { LocalGuard } from 'src/auth/local/local.guard';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users,
      BusinessEntity,
      UsersEmail,
      UsersPhones,
      UsersRoles,
      Roles,
    ]),
    PassportModule,
    JwtModule.register({ secret: 'sendra' }),
  ],
  providers: [UsersService, LocalGuard, JwtGuard],
  controllers: [UsersController],
  exports: [UsersService],
})
export class GlobalModule {}
