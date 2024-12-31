import dotenv from 'dotenv';
import { DEFAULT_PORT } from '../constants';
dotenv.config();

export const BASE_URL = process.env.BASE_URL || `http://localhost:${DEFAULT_PORT}`;
