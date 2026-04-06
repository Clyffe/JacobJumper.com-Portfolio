import { mkdirSync, writeFileSync } from 'fs';

const env = `export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_PUBLICKEY: '${process.env.EMAILJS_PUBLICKEY}',
  EMAILJS_TEMPLATEID: '${process.env.EMAILJS_TEMPLATEID}',
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync('./src/environments/environment.ts', env)