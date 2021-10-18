import { Module } from '@nestjs/common';

import { providedControllers } from './controllers';
import { InfrastructureModule } from './infrastructure';
import { providedServices } from './services';
import { providedRepositories } from './repositories';

@Module({
  imports: [InfrastructureModule],
  controllers: [...providedControllers],
  providers: [...providedServices, ...providedRepositories],
})
export class AppModule {}
