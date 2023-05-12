import { readFileSync } from 'fs';
import * as path from 'path';
import "dotenv/config";

const filePath = path.join(__dirname, '../../jwt.evaluation.key');

const readFileDocumentSecret = () => {
  const secret = readFileSync(filePath, 'utf-8');
  return secret;
};

export default readFileDocumentSecret;
