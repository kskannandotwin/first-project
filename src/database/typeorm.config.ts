import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    const dbType = configService.get<string>('DB_TYPE');
    const dbHost = configService.get<string>('DB_HOST');
    const dbUser = configService.get<string>('DB_USER');
    const dbPassword = configService.get<string>('DB_PASSWORD');
    const dbPort = configService.get<number>('DB_PORT');
    const dbName = configService.get<string>('DB_NAME');

    if (dbType !== 'mysql') {
      throw new Error(`Invalid DB_TYPE: ${dbType}. Only 'mysql' is supported.`);
    }

    if (!dbHost || !dbUser || !dbPassword || !dbName) {
      throw new Error('Missing required database configuration values.');
    }

    const port = dbPort ? Number(dbPort) : 3306;
    if (isNaN(port)) {
      throw new Error(`Invalid DB_PORT: ${dbPort}. Must be a valid number.`);
    }

    return {
      type: dbType as 'mysql',
      host: dbHost,
      port: port,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return TypeOrmConfig.getOrmConfig(configService);
  },
};
