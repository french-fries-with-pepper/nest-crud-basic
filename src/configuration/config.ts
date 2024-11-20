import { registerAs } from '@nestjs/config';

import * as pack from '../../package.json';

export default registerAs(
  'app-config',
  (): any =>
    ({
      API_PREFIX: '/api',
      API_VERSION: '/v1',
      SERVICE_NAME: pack.name,
      HTTP_PORT: Number(process.env.HTTP_PORT),
      SECRET_JWT: process.env.SECRET_JWT,
    }) as const,
);
