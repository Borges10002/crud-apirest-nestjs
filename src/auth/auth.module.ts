import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: `sdfadsfgafdgfdsgfdgfdsgsfdg23435`,
    }),
  ],
})
export class AuthModule {}
